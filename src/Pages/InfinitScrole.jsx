import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUser } from "../API/PostAPi";
import { useEffect } from "react";

export const InfinitScrole = () => {
  const { data, hasNextPage, fetchNextPage, isError, isLoading, error, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 10 ? allPages.length + 1 : undefined,
  });
  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -1;
    if(bottom && hasNextPage){
        fetchNextPage();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);
   if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;


  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h1 className="font-bold text-[25px]">Infinite Scroll</h1>

      {data?.pages?.map((page, index) => (
        <ul
          className="flex flex-col justify-center items-center w-[80%] m-auto"
          key={index}
        >
          {page.map((user) => (
            <li key={user.id} className="flex flex-col items-center my-2">
              <p>{user.login}</p>
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
            </li>
          ))}
        </ul>
      ))}
      <p>
        { isFetchingNextPage ? "Loading more...." : ""}
        </p>
    </section>
  );
};
