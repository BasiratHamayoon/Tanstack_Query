import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { fetchApi } from "../API/PostAPi"
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRq = () => {
    const [ pageNo, setPageNo ] = useState(0)
    const  { data, isLoading, isError, error } = useQuery({
        queryKey: ['Posts', pageNo],
        queryFn: () => fetchApi(pageNo),
        placeholderData: keepPreviousData,
        // gcTime: 1000,
        // staleTime: 10000,
        // refetchInterval: 1000,
        // refetchIntervalInBackground: true,

    });
    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error: {error.message}</h1>
    return (
        <>
        <div className="flex justify-center items-center flex-col w-[70%] m-auto mt-10">
            <ul className="flex justify-center items-center w-[100%] flex-col gap-6">
                {
                    data.map((item) => {
                        return (
                           <NavLink to={`/rqDetail/${item.id}`}>
                              <li key={item.id} className="bg-black px-6 py-2 flex flex-col">
                                <p>{item.id}</p>
                                <p>Title: {item.title}</p>
                                <p>Body: {item.body}</p>
                            </li>
                           </NavLink>
                        )
                    })
                }
            </ul>
            <div className="flex gap-4 mt-4">
                <button className="px-4 bg-green-700 cursor-pointer"
                onClick={() => setPageNo((prev) => prev - 3)} disabled={pageNo === 1? true : false}>Prev</button>
                <p>{pageNo / 3 + 1}</p>
                <button className="px-4 bg-green-700 cursor-pointer"
                onClick={() => setPageNo((prev) => prev + 3)}>Next</button>
            </div>
        </div>
        
        </>
    )
}