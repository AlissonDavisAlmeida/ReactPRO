import { lazy, LazyExoticComponent } from "react";

const LazyLayout = lazy(() => import(/* webpackChunkName: '' */"../layout/LazyLayout"));
const AboutPage = lazy(()=> import(/* webpackChunkName: 'LazyPage1' */"../pages/AboutPage"))
const Home = lazy(()=> import(/* webpackChunkName: 'LazyPage2' */"../pages/Home"))
const UsersPage = lazy(()=> import(/* webpackChunkName: 'LazyPage3' */"../pages/UsersPage"))
const ShoppingPage = lazy(()=> import(/* webpackChunkName: 'LazyPage4' */"../components_patterns/pages/ShoppingPage"))

type JSXComponet = () => JSX.Element

interface RouteInterface {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponet> | JSXComponet
    name: string;
}

export const routes: RouteInterface[] = [
    {
        to: "/",
        path: "/",
        Component: ShoppingPage,
        name: "Shopping"
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
    },
   
]