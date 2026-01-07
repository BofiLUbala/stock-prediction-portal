import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

/* ================= REQUEST INTERCEPTOR ================= */
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken')

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

/* ================= RESPONSE INTERCEPTOR ================= */
axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
        if (!error.response) {
            return Promise.reject(error)
        }

        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            const refreshToken = localStorage.getItem('refreshToken')

            try {
                // ⚠️ Use plain axios, NOT axiosInstance
                const res = await axios.post(
                    `${baseURL}/token/refresh/`,
                    { refresh: refreshToken }
                )
                  console.log('Response',res.data)
                const newAccessToken = res.data.access

                localStorage.setItem('accessToken', newAccessToken)

                // Update header & retry original request
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

                return axiosInstance(originalRequest)

            } catch (refreshError) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                window.location.href = '/login'
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance
