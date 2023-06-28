import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.idp)) {
            let index = cart.findIndex(prod => prod.idp === item.idp);
            cart[index].quantity += quantity;
            setCart([...cart]);
        }else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (itemId) => {
     const newItem = cart.filter(cartItem => cartItem.id !== itemId)
     setCart([...newItem]);
     console.log(newItem)
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(cartItem => cartItem.idp === itemId)
    }

    const totalCart = () => {
        return cart.reduce((accum, item) => accum += item.quantity, 0);
    }

    const totalAPagar = () => {
        return cart.reduce((accum, item) => accum += item.quantity * item.precio, 0);
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, totalCart, totalAPagar}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
