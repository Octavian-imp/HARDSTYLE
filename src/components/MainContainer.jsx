import { CartProvider } from "../providers/CartContext";
import Header from "./header/Header";

function MainContainer({ isHeader = true, children }) {
    return (
        <CartProvider>
            {isHeader && <Header />}
            {children}
        </CartProvider>
    );
}

export default MainContainer;
