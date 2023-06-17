import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Layout from "./components/Layout"
import MainContainer from "./components/MainContainer"
import useToggleTheme from "./hooks/useToggleTheme"
import { useGetUserMutation } from "./http/userAuthApi.RTK"
import Accessories from "./pages/accessories/Accessories"
import All from "./pages/all/All"
import LayoutUser from "./pages/cabinet/LayoutUser"
import Coupon from "./pages/cabinet/coupon/Coupon"
import Favorite from "./pages/cabinet/favorite/Favorite"
import Orders from "./pages/cabinet/orders/Orders"
import Profile from "./pages/cabinet/profile/Profile"
import Support from "./pages/cabinet/reqSupport/Support"
import SupportChat from "./pages/cabinet/reqSupport/SupportChat"
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
    const [getUser, { data: user }] = useGetUserMutation()
    useToggleTheme()
    useEffect(() => {
        getUser()
    }, [])
    // const [loading, setLoading] = useState(false)
    // if (loading) {
    //     return (
    //         <ThemeProvider>
    //             <Layout>
    //                 <Preloader previewText="Loading..." />
    //             </Layout>
    //         </ThemeProvider>
    //     )
    // }
    return (
        <ThemeProvider>
            <Layout>
                <CartProvider>
                    <MainContainer>
                        <Routes>
                            {/* Авторизованный пользователь */}
                            {user && (
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
                                    <Route
                                        path="support/:id"
                                        element={<SupportChat />}
                                    />
                                    <Route path="coupon" element={<Coupon />} />
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
                            {/* <Route path="/" element={<Content />} /> */}
                            <Route path="/" element={<Home />} />
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
