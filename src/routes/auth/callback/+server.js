import { createSession } from "$lib/server/auth.js"

export async function GET({ platform, url }) {
  // do stuff
  const code = url.searchParams.get('code')
  // POST to google oauth, get token
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: platform.env.GOOGLE_CLIENT_ID,
      client_secret: platform.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${url.origin}/auth/callback`,
      grant_type: 'authorization_code'
    })
  })
  const tokenData = await tokenResponse.json()
  const payload = JSON.parse(atob(tokenData.id_token.split('.')[1]))


  const existsInDB = await platform.env.DB.prepare(`
    SELECT * FROM users WHERE id = ? LIMIT 1
  `).bind(payload.sub).first()

  if (!existsInDB) {
    const createdAt = Math.floor(Date.now() / 1000)
    await platform.env.DB.prepare(`
      INSERT INTO users (id, email, name, avatar, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(payload.sub, payload.email, payload.name, payload.picture, createdAt).run()
  }

  const sessionId = await createSession(platform.env.DB, payload.sub)

  return new Response(null, {
    status: 302,
    headers: {
      'Location': '/',
      'Set-Cookie': `session=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60*60*24*90}`
    }
  })
}