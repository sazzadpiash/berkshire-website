import { createBrowserRouter } from "react-router-dom";
import Furniture from "../components/Furniture/Furniture";
import RoomsCategory from "../components/Furniture/RoomsCategory";
import ProductPage from "../components/ProductPage/ProductPage";
import Main from "../layout/Main";
import Categories from "../pages/Categories/Categories";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/Singleproduct/SingleProduct";
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
                path: '/brands/:id',
                // loader: ()=>fetch('http://localhost:5000/products'),
                element: <Categories></Categories>
            },
            {
                path: '/furniture/:id',
                // loader: ()=>fetch('http://localhost:5000/products'),
                element: <Furniture></Furniture>
            },
            {
                path: '/furniture/room/:id',
                // loader: ()=>fetch('http://localhost:5000/products'),
                element: <RoomsCategory></RoomsCategory>
            },
            {
                path: '/furniture/room/products/:id',
                // loader: ()=>fetch('http://localhost:5000/products'),
                element: <ProductPage></ProductPage>
            },
            {
                path: '/product/:id',
                // loader: ()=>fetch('http://localhost:5000/products'),
                element: <SingleProduct></SingleProduct>
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