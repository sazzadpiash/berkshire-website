import { createBrowserRouter } from "react-router-dom";
import AllProduct from "../admin/AllProduct/AllProduct";
import BulkEdit from "../admin/BulkEdit/BulkEdit";
import DashboardPage from "../admin/DashboardPage/DashboardPage";
import Brands from "../Brands/Brands";
import Handstone from "../Brands/Handstone/Handstone";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Furniture from "../components/Furniture/Furniture";
import RoomsCategory from "../components/Furniture/RoomsCategory";
import OrderInformation from "../components/OrderInformation/OrderInformation";
import PaymentMethod from "../components/PaymentMethod/PaymentMethod";
import ProductPage from "../components/ProductPage/ProductPage";
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
import Warranty from "../components/Warranty/Warranty";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Cart from "../pages/Cart/Cart";
import Categories from "../pages/Categories/Categories";
import Home from "../pages/Home/Home";
import InformationCenter from "../pages/InformationCenter/InformationCenter";
import Login from "../pages/LoginRegister/Login";
import SingleProduct from "../pages/Singleproduct/SingleProduct";
import AllProducts from "../test/AllProducts";
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
                path: '/information-center',
                element: <InformationCenter></InformationCenter>,
                children: [
                    {
                        path: '/information-center',
                        element: <AboutUs></AboutUs>
                    },
                    {
                        path: '/information-center/contact-us',
                        element: <ContactUs></ContactUs>
                    },
                    {
                        path: '/information-center/order-information',
                        element: <OrderInformation></OrderInformation>
                    },
                    {
                        path: '/information-center/shipping-information',
                        element: <ShippingInfo></ShippingInfo>
                    },
                    {
                        path: '/information-center/warranty',
                        element: <Warranty></Warranty>
                    },
                    {
                        path: '/information-center/payment-method',
                        element: <PaymentMethod></PaymentMethod>
                    },
                ]
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
                element: <Brands></Brands>
            },
            {
                path: '/Handstone',
                element: <Handstone></Handstone>
            },
            {
                path: '/furniture/:id',
                element: <Furniture></Furniture>
            },
            {
                path: '/furniture/room/:id',
                element: <RoomsCategory></RoomsCategory>
            },
            {
                path: '/furniture/room/products/:id',
                element: <ProductPage></ProductPage>
            },
            {
                path: '/product/:id',
                element: <SingleProduct></SingleProduct>
            },


            // test route
            {
                path: '/allproducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/test',
                element: <Test></Test>
            },
        ]
    },
    {
        path: '/admin',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/admin/dashboard',
                element: <DashboardPage></DashboardPage>
            },
            {
                path: '/admin/all-product',
                element: <AllProduct></AllProduct>
            },
            {
                path: '/admin/bulk-edit',
                element: <BulkEdit></BulkEdit>
            },
        ]
    }
])

export {router};