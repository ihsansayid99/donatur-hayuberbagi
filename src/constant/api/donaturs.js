import axios from 'configs/axios'

export default {
    login: (credentials) => axios.post("/donatur/login", credentials),
    register: (payload) => axios.post("/donatur/register", payload),
    details: (id) => axios.get(`/donatur/${id}`),
    logout: (payload) => axios.post('/donatur/', payload),
    donate: (payload) => axios.post(`/donation/`, payload),
    getDonate: (id) => axios.get(`/donation/${id}`)

}