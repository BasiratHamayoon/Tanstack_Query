import { useQuery } from "@tanstack/react-query"
import { fetchDetailPost } from "../API/PostAPi"
import { NavLink, useParams } from "react-router-dom"

export const FetchDetail = () => {
    const { id } = useParams()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['post'],
        queryFn: () => fetchDetailPost(id)
    })
    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error: {error.message}</h1>
    return (
        <>
        <div className="flex justify-center items-center flex-col w-[70%] m-auto mt-10">
            <h1 className="font-bold text-[25px]">Post ID {data.id}</h1>
            <div className="flex flex-col bg-black px-4 py-2 mt-4 w-[100%] flex-col gap-6">
                <p>{data.id}</p>
                <p>title: {data.title}</p>
                <p>body: {data.body}</p>
                <NavLink to={"/rq"}>
                    <button className="px-4 py-2 text-white bg-green-700 cursor-pointer">GO Back</button>
                </NavLink>
            </div>
        </div>
        </>
    )
}