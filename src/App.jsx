import { useState } from "react"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Content from "./Content"
import Layout from "./components/Layout"
import MainContainer from "./components/MainContainer"
import useToggleTheme from "./hooks/useToggleTheme"
import Accessories from "./pages/accessories/Accessories"
import All from "./pages/all/All"
import LayoutUser from "./pages/cabinet/LayoutUser"
import Favorite from "./pages/cabinet/favorite/Favorite"
import Orders from "./pages/cabinet/orders/Orders"
import AddProduct from "./pages/cabinet/products/AddProduct"
import AllProducts from "./pages/cabinet/products/AllProducts"
import Profile from "./pages/cabinet/profile/Profile"
import Support from "./pages/cabinet/reqSupport/Support"
import CartPage from "./pages/cart/CartPage"
import ForHer from "./pages/forHer/ForHer"
import ForHim from "./pages/forHim/ForHim"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import New from "./pages/new/New"
import ItemPage from "./pages/pageItem/ItemPage"
import Preloader from "./pages/preloader/Preloader"
import { CartProvider } from "./providers/CartContext"
import { ThemeProvider } from "./providers/ThemeProvider.jsx"

const App = () => {
    const user = useSelector((state) => state.user)

    useToggleTheme()
    const [loading, setLoading] = useState(false)
    if (loading) {
        return (
            <ThemeProvider>
                <Layout>
                    <Preloader previewText="Loading..." />
                </Layout>
            </ThemeProvider>
        )
    }
    return (
        <ThemeProvider>
            <Layout>
                <CartProvider>
                    <MainContainer>
                        <Routes>
                            {/* Авторизованный пользователь */}
                            {/* Убрать */}
                            {user !== null && (
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
                                    {/* <Route path="products">
                                        <Route
                                            path="add"
                                            element={<AddProduct />}
                                        />
                                        <Route
                                            path="all"
                                            element={<AllProducts />}
                                        />
                                    </Route> */}
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
    )
}

export default App
