import { useQuery } from "@tanstack/react-query"
import { fetchApi } from "../API/PostAPi"

export const FetchRq = () => {
    const  {data} = useQuery({
        queryKey: ['Posts'],
        queryFn: fetchApi,
    });
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