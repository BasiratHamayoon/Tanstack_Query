import { NavLink } from "react-router-dom"
export const Header = () => {
    const navItems = [
        {
            id: 1, title: "Home", url: "/"
        },
        {
            id: 2, title:"FetchRq", url: "/rq"
        }
    ]
    return (
        <>
          <div className="flex justify-between px-20 py-4 items-center">
            <h1 className="text-[25px] font-bold">React Query</h1>
            <ul className="flex justify-center items-center gap-6">
                {
                    navItems.map((item) => {
                        return (
                            <li key={item.id} className="hover:text-yellow-400">
                                <NavLink to={item.url}>{item.title}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
          </div>
        </>
    )
}