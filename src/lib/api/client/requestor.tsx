// libs/requestor.ts
import axios from 'axios'
import { useAuthStore } from '../../stores/useAuthStore'

const requestor = axios.create()

requestor.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken
  if (token) {
    config.headers = config.headers || {}
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

export default requestor
