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
        return instance.get(`${id}/similar?number=100`)
    },
    getBooksBySearch(search, number) {
        if (!search) return null;

        return instance.get(`search-books?query=${search}&number=${number}`)
    },
    getPopularBooks(number) {
        return instance.get(`search-books?query=popular+books&number=${number}`)   
    },
    getBookById(id) {
        return instance.get(`${id}`)
    }
}


