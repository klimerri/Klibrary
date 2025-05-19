import { useMutation, useQuery } from "@tanstack/react-query"
import { books } from "../api"
import { client } from "../App"

// export const useAllBooks = (params) => {
//     return useQuery({
//         queryKey: ['books', params],
//         queryFn: () => books.getAll(params), 
//         select: data => data.data
//     })
// }

export const useSimilarBooks = (id) => {
    return useQuery({
        queryKey: ['similar-books', id],
        queryFn: () => books.getSimilarBooks(id), 
        select: data => data.data.similar_books
    })
}

export const useBooksBySearch = (search, number = 10) => {
    return useQuery({
        queryKey: ['search-books', search, number],
        queryFn: () => books.getBooksBySearch(search, number), 
        select: data => data.data.books,
        enabled: !!search,
    })
}

export const usePopularBooks = (number) => {
    return useQuery({
        queryKey: ['popular-books', number],
        queryFn: () => books.getPopularBooks(number),
        select: data => data.data.popular
    })
}

export const useOneBookById = (id) => {
    return useQuery({
        queryKey: ['one-book-id', id],
        queryFn: () => books.getBookById(id),
        enabled: !!id
    })
}
