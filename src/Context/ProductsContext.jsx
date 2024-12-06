import { createContext, useState } from "react";
import products from '../Data/products';

const ProductsContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    products.forEach((product) => {
        cart[product.id] = 0
    })
    return cart;
}

const ProductsDataProvider = ({children}) => {
    let [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prevCart) => ({...prevCart, [itemId]: prevCart[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCart) => ({...prevCart, [itemId]: prevCart[itemId] - 1}))
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    };

    const contextValue = {products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

    return(
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
};

export {ProductsContext}
export default ProductsDataProvider;