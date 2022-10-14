import "./App.scss";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import Layout from "./components/Layout";
import Content from "./Content";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import ForHim from "./pages/forHim/ForHim";
import ForHer from "./pages/forHer/ForHer";
import Accessories from "./pages/accessories/Accessories";
import All from "./pages/all/All";
import NotFound from "./pages/notFound/NotFound";
import useToggleTheme from "./hooks/useToggleTheme";
import PageItem from "./pages/pageItem/PageItem";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import CartPage from "./pages/cart/CartPage";
import Profile from "./pages/cabinet/profile/Profile";
import Orders from "./pages/cabinet/orders/Orders";
import LayoutUser from "./pages/cabinet/LayoutUser";
import Favorite from "./pages/cabinet/favorite/Favorite";
import Support from "./pages/cabinet/reqSupport/Support";
import AddProduct from "./pages/cabinet/products/AddProduct";

function App() {
    useToggleTheme();
    return (
        <ThemeProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/for-him" element={<ForHim />} />
                    <Route path="/for-her" element={<ForHer />} />
                    <Route path="/accessories" element={<Accessories />} />
                    <Route path="/all" element={<All />} />
                    <Route path="/item" element={<PageItem />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="user" element={<LayoutUser />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="favorite" element={<Favorite />} />
                        <Route path="support" element={<Support />} />
                        <Route path="products">
                            <Route path="add" element={<AddProduct />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
