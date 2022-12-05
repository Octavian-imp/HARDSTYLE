import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
//Merge
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Context.Provider
            value={{ user: new UserStore(), products: new ProductStore() }}
        >
            <BrowserRouter>
                <App />
            
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);
