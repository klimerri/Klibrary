import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.bigbookapi.com/',
    headers: {
        'x-api-key': import.meta.env.VITE_API_KEY,
    }
})


export const news = {
    getAll(hhh, params) {
        return instance.get(`search-books?query=Crime&number=100`, params)
    }
}
