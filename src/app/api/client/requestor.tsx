import axios from 'axios'

const requestor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  withCredentials: true,
})

export default requestor
