import Axios from 'axios'
let Request = Axios.create({
  baseURL: 'http://localhost:8080'
})
export { Request }
