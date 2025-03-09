import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.bigbookapi.com/',
    headers: {
        'x-api-key': import.meta.env.VITE_API_KEY,
    }
})

export const books = {
    // getAll(hhh, params) {
    //     return instance.get(`search-books?query=alice`, params)
    // },
    getSimilarBooks(id) {
        return instance.get(`${id}/similar`)
    }
}


