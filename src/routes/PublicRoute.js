import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Test from "../test/Test";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/test',
                // loader: ()=>fetch('http://localhost:5000/products'),
                element: <Test></Test>
            },
        ]
    }
])

export {router};