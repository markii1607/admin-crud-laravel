import axios from "axios"

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

// interceptors for request
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

// interceptors for response
axiosClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    const { response } = error

    if (response.status == 401) { // unauthorized
        localStorage.removeItem('ACCESS_TOKEN')
    }
})

export default axiosClient