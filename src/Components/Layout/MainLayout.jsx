import { Outlet } from "react-router-dom"
import { FetchRq } from "../../Pages/FetchRq"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}