import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Layout from "./components/Layout.jsx"
import MainContainer from "./components/MainContainer.jsx"
import useToggleTheme from "./hooks/useToggleTheme.js"
import { useGetUserMutation } from "./http/userAuthApi.RTK.js"
import Accessories from "./pages/accessories/Accessories.jsx"
import All from "./pages/all/All.jsx"
import LayoutUser from "./pages/cabinet/LayoutUser.jsx"
import Coupon from "./pages/cabinet/coupon/Coupon.jsx"
import Favorite from "./pages/cabinet/favorite/Favorite.jsx"
import Orders from "./pages/cabinet/orders/Orders.jsx"
import Profile from "./pages/cabinet/profile/Profile.jsx"
import Support from "./pages/cabinet/reqSupport/Support.jsx"
import SupportChat from "./pages/cabinet/reqSupport/SupportChat.jsx"
import CartPage from "./pages/cart/CartPage.jsx"
import ForHer from "./pages/forHer/ForHer.jsx"
import ForHim from "./pages/forHim/ForHim.jsx"
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import New from "./pages/new/New.jsx"
import ItemPage from "./pages/pageItem/ItemPage.jsx"
import Preloader from "./pages/preloader/Preloader.jsx"
import { CartProvider } from "./providers/CartContext.jsx"
import { ThemeProvider } from "./providers/ThemeProvider.jsx"
import { LOGOUT_USER } from "./store/actions/userActionsTypes"

const App = () => {
    const dispatch = useDispatch()
    const [getUser, { data: user, isError }] = useGetUserMutation()
    useToggleTheme()
    useEffect(() => {
        getUser()
        if (isError) {
            dispatch({ type: LOGOUT_USER })
            localStorage.removeItem("token")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
