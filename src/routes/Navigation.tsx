import  { Suspense } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";


function Navigation() {
    return (
        <>

            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />

                        <ul>
                            {routes.map(route => (
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </nav>
                    <Suspense fallback={<>
                        <h1>Loading...</h1>
                    </>}>
                        <div className="main">

                        <Routes >
                            
                            {routes.map(route => (
                                <Route key={route.to} path={route.path} element={<route.Component/>}/>
                                ))}

                        </Routes>
                                </div>
                    </Suspense>
                </div>
            </BrowserRouter>
        </>
    );
}

export default Navigation;