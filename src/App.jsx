import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { MainLayout } from "./Components/Layout/MainLayout";
import { Home } from "./Pages/Home";
import { FetchRq } from "./Pages/FetchRq";
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
  return <RouterProvider router={router} />
}
export default App;