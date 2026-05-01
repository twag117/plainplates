export function generateId() {
  return crypto.randomUUID()
}

export async function createSession(db, userId) {
  const sessionId = generateId()
  const createdAt = Math.floor(Date.now() / 1000)
  const expiresAt = createdAt + (60 * 60 * 24 * 90)
  
  await db.prepare(`
    INSERT INTO sessions (id, user_id, expires_at, created_at)
    VALUES (?, ?, ?, ?)
  `).bind(sessionId, userId, expiresAt, createdAt).run()

  return sessionId
}

export async function getSession(db, sessionId) {
  let returnSession
  const dbSession = await db.prepare(`
      SELECT * FROM sessions WHERE id = ? LIMIT 1
    `).bind(sessionId).first()

  if ( dbSession && dbSession.expires_at > Math.floor(Date.now() / 1000) ) {
    returnSession = dbSession
  }

  return returnSession
}