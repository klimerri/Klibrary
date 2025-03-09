import { useQuery } from "@tanstack/react-query"
import { books } from "../api"

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