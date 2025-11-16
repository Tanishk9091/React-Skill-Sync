// Lightweight client-side password hashing using Web Crypto (SHA-256)
// Returns a hex string representation of the SHA-256 digest for the input password.
export async function hashPassword(password) {
  if (!password) return ''
  const enc = new TextEncoder()
  const data = enc.encode(password)
  const hashBuffer = await (crypto || window.crypto).subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
