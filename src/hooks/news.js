import { useQuery } from "@tanstack/react-query"
import { news } from "../api"

export const useAllNews = (params) => {
    return useQuery({
        queryKey: ['news', params],
        queryFn: () => news.getAll(params), 
        select: data => data.data
    })
}