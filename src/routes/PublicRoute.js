import { createBrowserRouter } from "react-router-dom";
import Handstone from "../Brands/Handstone/Handstone";
import Furniture from "../components/Furniture/Furniture";
import RoomsCategory from "../components/Furniture/RoomsCategory";
import ProductPage from "../components/ProductPage/ProductPage";
import Main from "../layout/Main";
import Cart from "../pages/Cart/Cart";
import Categories from "../pages/Categories/Categories";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginRegister/Login";
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
                path: '/contact-us',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/brands/:id',
                // loader: ()=>fetch('https://berkshire-furniture.vercel.app/products'),
                element: <Categories></Categories>
            },
            {
                path: '/Handstone',
                // loader: ()=>fetch('https://berkshire-furniture.vercel.app/products'),
                element: <Handstone></Handstone>
            },
            {
                path: '/furniture/:id',
                // loader: ()=>fetch('https://berkshire-furniture.vercel.app/products'),
                element: <Furniture></Furniture>
            },
            {
                path: '/furniture/room/:id',
                // loader: ()=>fetch('https://berkshire-furniture.vercel.app/products'),
                element: <RoomsCategory></RoomsCategory>
            },
            {
                path: '/furniture/room/products/:id',
                // loader: ()=>fetch('https://berkshire-furniture.vercel.app/products'),
                element: <ProductPage></ProductPage>
            },
            {
                path: '/product/:id',
                // loader: ()=>fetch('https://berkshire-furniture.vercel.app/products'),
                element: <SingleProduct></SingleProduct>
            },
            {
                path: '/test',
                // loader: ()=>fetch('https://berkshire-furniture.vercel.app/products'),
                element: <Test></Test>
            },
        ]
    }
])

export {router};