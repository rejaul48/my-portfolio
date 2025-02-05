import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";


const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout ></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home ></Home>
            }
        ]
    }
])

export default routers