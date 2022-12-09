import { useState, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import Layout from "./components/Layout";
import Content from "./Content";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import ForHim from "./pages/forHim/ForHim";
import ForHer from "./pages/forHer/ForHer";
import Accessories from "./pages/accessories/Accessories";
import All from "./pages/all/All";
import Preloader from "./pages/preloader/Preloader";
import useToggleTheme from "./hooks/useToggleTheme";
import ItemPage from "./pages/pageItem/ItemPage";
import Login from "./pages/login/Login";
import CartPage from "./pages/cart/CartPage";
import Profile from "./pages/cabinet/profile/Profile";
import Orders from "./pages/cabinet/orders/Orders";
import LayoutUser from "./pages/cabinet/LayoutUser";
import Favorite from "./pages/cabinet/favorite/Favorite";
import Support from "./pages/cabinet/reqSupport/Support";
import AddProduct from "./pages/cabinet/products/AddProduct";
import AllProducts from "./pages/cabinet/products/AllProducts";
import { Context } from ".";
import { check } from "./http/userApi";
import { CartProvider } from "./providers/CartContext";
import MainContainer from "./components/MainContainer";

const App = observer(() => {
    const { user } = useContext(Context);

    useEffect(() => {
        check()
            .then((data) => {
                user.setUser(data);
                user.setIsAuth(true);
            })
            .finally(setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useToggleTheme();
    const [loading, setLoading] = useState(true);
    if (loading) {
        return (
            <ThemeProvider>
                <Layout>
                    <Preloader previewText="Loading..." />
                </Layout>
            </ThemeProvider>
        );
    }
    return (
        <ThemeProvider>
            <Layout>
                <CartProvider>
                    <MainContainer>
                        <Routes>
                            {/* Авторизованный пользователь */}
                            {user.isAuth && (
                                <Route path="user" element={<LayoutUser />}>
                                    <Route
                                        path="profile"
                                        element={<Profile />}
                                    />
                                    <Route path="orders" element={<Orders />} />
                                    <Route
                                        path="favorite"
                                        element={<Favorite />}
                                    />
                                    <Route
                                        path="support"
                                        element={<Support />}
                                    />
                                    <Route path="products">
                                        <Route
                                            path="add"
                                            element={<AddProduct />}
                                        />
                                        <Route
                                            path="all"
                                            element={<AllProducts />}
                                        />
                                    </Route>
                                </Route>
                            )}
                            {/* Публичные маршруты */}
                            <Route path="/" element={<Content />} />
                            <Route path="home" element={<Home />} />
                            <Route path="new" element={<New />} />
                            <Route path="for-him" element={<ForHim />} />
                            <Route path="for-her" element={<ForHer />} />
                            <Route
                                path="accessories"
                                element={<Accessories />}
                            />
                            <Route path="all" element={<All />} />
                            <Route path="product/:id" element={<ItemPage />} />
                            <Route path="login" element={<Login />} />
                            <Route path="registration" element={<Login />} />
                            <Route path="cart" element={<CartPage />} />
                            <Route
                                path="*"
                                element={
                                    <Preloader previewText={"Not Found"} />
                                }
                            />
                        </Routes>
                    </MainContainer>
                </CartProvider>
            </Layout>
        </ThemeProvider>
    );
});

export default App;
