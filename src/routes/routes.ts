import { lazy, LazyExoticComponent } from "react";
import FormikComponent from "../forms/pages/FormikComponent";
import FormikPage from "../forms/pages/FormikPage";
import FormikAbstract from "../forms/pages/FormikAbstract";
import RegisterPage from "../forms/pages/RegisterPage";
import RegisterFormikPage from "../forms/pages/RegisterFormikPage";
import { DynamicForm } from "../forms/pages/DynamicForm";

const LazyLayout = lazy(() => import(/* webpackChunkName: '' */"../layout/LazyLayout"));
const AboutPage = lazy(()=> import(/* webpackChunkName: 'LazyPage1' */"../pages/AboutPage"))
const Home = lazy(()=> import(/* webpackChunkName: 'LazyPage2' */"../pages/Home"))
const UsersPage = lazy(()=> import(/* webpackChunkName: 'LazyPage3' */"../pages/UsersPage"))

type JSXComponet = () => JSX.Element

interface RouteInterface {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponet> | JSXComponet
    name: string;
}

export const routes: RouteInterface[] = [
    {
        to: "/register",
        path: "register",
        Component: RegisterPage,
        name: "Register"
    },
    {
        to: "/dynamic-form",
        path: "dynamic-form",
        Component: DynamicForm,
        name: "Dynamic Form"
    },
    {
        to: "/register-formik",
        path: "register-formik",
        Component: RegisterFormikPage,
        name: "Register Formik"
    },
    {
        to: "/formik",
        path: "formik",
        Component: FormikPage,
        name: "Formik"
    },
    {
        to: "/formik_component",
        path: "formik_component",
        Component: FormikComponent,
        name: "Formik Component"
    },
    {
        to: "/formik_abstraction",
        path: "formik_abstraction",
        Component: FormikAbstract,
        name: "Formik Abstract"
    },
    {
        to: "/",
        path: "/",
        Component: Home,
        name: "Home"
    }
    ,
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