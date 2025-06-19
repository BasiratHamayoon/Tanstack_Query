import { keepPreviousData, QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deletPost, fetchApi } from "../API/PostAPi"
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRq = () => {
  const QueryClient = useQueryClient();
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
    const deleteMutaion = useMutation({
        mutationFn: (id) => deletPost(id),
        onSuccess: (data, id) => {
            QueryClient.setQueryData(["Posts", pageNo], (curritem) => {
                return curritem?.filter((item) => item.id !== id)
        })
        }
    });
    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error: {error.message}</h1>
    return (
        <>
        <div className="flex justify-center items-center flex-col w-[70%] m-auto mt-10">
           <ul className="flex justify-center items-center w-full flex-col gap-6">
  {
    data.map((item) => (
      <li key={item.id} className="bg-black text-white px-6 py-4 flex flex-col gap-2 w-full rounded shadow-md">
        <NavLink to={`/rqDetail/${item.id}`} className="hover:underline">
          <div>
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Title:</strong> {item.title}</p>
            <p><strong>Body:</strong> {item.body}</p>
          </div>
        </NavLink>
        <button
          className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded self-end"
          onClick={() => deleteMutaion.mutate(item.id)}
        >
          Delete
        </button>
      </li>
    ))
  }
</ul>
            <div className="flex gap-4 mt-4">
                <button className="px-4 bg-green-700 cursor-pointer"
                onClick={() => setPageNo((prev) => prev - 3)} disabled={pageNo === 0? true : false}>Prev</button>
                <p>{pageNo / 3 + 1}</p>
                <button className="px-4 bg-green-700 cursor-pointer"
                onClick={() => setPageNo((prev) => prev + 3)}>Next</button>
            </div>
        </div>
        
        </>
    )
}