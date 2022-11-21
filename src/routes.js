import Favorite from "./pages/cabinet/favorite/Favorite";
import Orders from "./pages/cabinet/orders/Orders";
import AddProduct from "./pages/cabinet/products/AddProduct";
import AllProducts from "./pages/cabinet/products/AllProducts";
import Profile from "./pages/cabinet/profile/Profile";
import Support from "./pages/cabinet/reqSupport/Support";
import { USER_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: USER_ROUTE + "/profile",
        Component: Profile,
    },
    {
        path: USER_ROUTE + "/orders",
        Component: Orders,
    },

    {
        path: USER_ROUTE + "/favorite",
        Component: Favorite,
    },

    {
        path: USER_ROUTE + "/support",
        Component: Support,
    },

    {
        path: USER_ROUTE + "/products/add",
        Component: AddProduct,
    },

    {
        path: USER_ROUTE + "/products/all",
        Component: AllProducts,
    },
];
