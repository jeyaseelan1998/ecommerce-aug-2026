import { getCookie, removeCookie, setCookie } from './cookie'

// Not `web_token`: the API used to set an httpOnly cookie by that name, and a
// page script cannot overwrite an httpOnly cookie, so reusing it would fail
// silently wherever the old one is still stored.
const TOKEN_COOKIE = 'auth_token'

export const getToken = () => getCookie(TOKEN_COOKIE)

/**
 * Stores the token from a signin/signup response (`{ user, token, expiresAt }`)
 * until the moment it expires. Call clearSession() on sign-out.
 */
export const saveSession = ({ token, expiresAt }) =>
  setCookie(TOKEN_COOKIE, token, { expires: expiresAt * 1000 })

export const clearSession = () => removeCookie(TOKEN_COOKIE)
