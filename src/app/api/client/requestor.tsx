import axios from 'axios'

const requestor = axios.create({
  withCredentials: true,
})

export default requestor
