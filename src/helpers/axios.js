import axios from 'axios'
import { getToken } from './session'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// The API sets no cookies: a signed-in shopper's token is kept client-side
// (see session.js) and sent on every request.
api.interceptors.request.use((config) => {
  const token = getToken()

  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})

export default api
