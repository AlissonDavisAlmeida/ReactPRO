import { AboutPage, Home } from "../pages";
import UsersPage from "../pages/UsersPage";

interface RouteInterface {
    to: string;
    path: string;
    Component: () => JSX.Element
    name: string;
}

export const routes: RouteInterface[] = [
    {
        to: "/",
        path: "/",
        Component: Home,
        name: "Home"
    },
    {
        to: "/about",
        path: "about",
        Component: AboutPage,
        name: "About"
    },
    {
        to: "/users",
        path: "users",
        Component: UsersPage,
        name: "Users"
    }
]