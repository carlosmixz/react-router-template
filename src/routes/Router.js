import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage.js"
import ProfilePage from "../pages/ProfilePage.js"
import ErrorPage from "../pages/ErrorPage.js"
import LoginPage from "../pages/LoginPage.js"

export default function Router() {
    
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage/>}/>
                <Route path="/profile/:name" element={<ProfilePage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/Login" element={<LoginPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}