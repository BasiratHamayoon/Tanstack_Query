import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Home } from "./Pages/Home";
import { FetchRq } from "./Pages/FetchRq";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FetchDetail } from "./Pages/FetchDetail";
import { InfinitScrole } from "./Pages/InfinitScrole";
const router = createBrowserRouter([
  {
    path: '/',
    element : <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: 'rq',
        element: <FetchRq />
      },
      {
        path: "/rqDetail/:id",
        element: <FetchDetail />
      },
      {
        path: "/infinit",
        element: <InfinitScrole />
      }
    ]
  }
])

const App = () => {
  const queryClient = new QueryClient();
  return (
   <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
   </QueryClientProvider>
  )
}
export default App;