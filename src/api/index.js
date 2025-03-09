import axios from "axios"

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    header: {
        'Autorization': import.meta.env.VITE_API_KEY,
    }
})


export const news = {
    getAll(hhh, params) {
        return instance.get('volumes?q=цветы&filter=free-ebooks', params)
    }
}
