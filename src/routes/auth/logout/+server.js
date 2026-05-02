

export async function GET( {platform, url, request} ) {
  const sessionId = request.headers.get('cookie')
    ?.split('; ')
    .find(c => c.startsWith('session='))
    ?.split('=')[1]

  await platform.env.DB.prepare(`
    DELETE FROM sessions WHERE id = ?
  `).bind(sessionId).run()

  return new Response(null, {
    status: 302,
    headers: {
      'Location': '/',
      'Set-Cookie': `session=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
    }
  })
}