import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Home } from "./Pages/Home";
import { FetchRq } from "./Pages/FetchRq";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
      }
    ]
  }
])

const App = () => {
  const queryClient = new QueryClient();
  return (
   <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
   </QueryClientProvider>
  )
}
export default App;