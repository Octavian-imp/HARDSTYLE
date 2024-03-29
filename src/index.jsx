import { configureStore } from "@reduxjs/toolkit"
import React, { createContext } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import { authApi } from "./http/authApi.RTK"
import { publicApi } from "./http/publicApi.RTK"
import "./index.scss"
import { CartReducer } from "./store/reducers/cartReducer"
import { UserReducer } from "./store/reducers/userReducer"

export const Context = createContext(null)

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem("state", JSON.stringify(state))
    } catch (e) {
        console.error(e)
    }
}

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem("state")
        return stateStr ? JSON.parse(stateStr) : undefined
    } catch (e) {
        console.error(e)
        return undefined
    }
}

const persistedStore = loadFromLocalStorage()

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        cart: CartReducer,
        user: UserReducer,
        [publicApi.reducerPath]: publicApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            publicApi.middleware,
            authApi.middleware,
        ]),
    preloadedState: persistedStore,
})
store.subscribe(() => {
    saveToLocalStorage(store.getState())
})
const root = createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
