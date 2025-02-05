import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutMePage from "../pages/AboutMePage/AboutMePage";


const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout ></MainLayout>,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home ></Home>
            },
            {
                path: 'about-me',
                element: <AboutMePage ></AboutMePage>
            }
        ]
    }
])

export default routers