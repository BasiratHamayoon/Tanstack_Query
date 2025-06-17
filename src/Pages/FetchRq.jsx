import { useQuery } from "@tanstack/react-query"
import { fetchApi } from "../API/PostAPi"

export const FetchRq = () => {
    const  { data, isLoading, isError, error } = useQuery({
        queryKey: ['Posts'],
        queryFn: fetchApi,
        // gcTime: 1000,
        // staleTime: 10000,
        refetchInterval: 1000,
        refetchIntervalInBackground: true,

    });
    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error: {error.message}</h1>
    return (
        <>
        <div className="flex justify-center items-center w-[70%] m-auto mt-10">
            <ul className="flex justify-center items-center w-[100%] flex-col gap-6">
                {
                    data.map((item) => {
                        return (
                            <li key={item.id} className="bg-black px-6 py-4 flex flex-col gap-4">
                                <p>Title: {item.title}</p>
                                <p>Body: {item.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        
        </>
    )
}