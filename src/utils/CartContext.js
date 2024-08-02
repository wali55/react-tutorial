import { createContext } from "react";

const CartContext = createContext({
    cart: {
        quantity: 2,
        price: 200
    }
});

CartContext.displayName = "CartContext";

export default CartContext;