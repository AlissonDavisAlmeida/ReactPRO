import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import UserPage from "../pages/UsersPage";

function LazyLayout() {
    return ( 
        
            <div>
            <h1>LazyLayout Page</h1>
            <ul>
                <li>
                    <NavLink to="user">Users</NavLink>
                </li>
                <li>
                    <NavLink to="about">About</NavLink>
                </li>
                
            </ul>
                <Routes>
                    <Route path="user" element={<UserPage />} />
                    <Route path="about" element={<AboutPage />} />

                    <Route path="*" element={<Navigate replace to="user"/>} />
                </Routes>
            </div>
     );
}

export default LazyLayout;