import { useContext } from 'react';
import './CSS/Cart.css';
import { ProductsContext } from '../Context/ProductsContext';

export default function Cart() {
    const {products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ProductsContext);
    return(
        <div className='cart'>
            <div className="container">
                <div className="cart__inner">
                    <div className="cart__top">
                        <div className="cart__top_row">
                            <div className="cart__image_col"><p><strong>Product</strong></p></div>
                            <div className="cart__title_col"><p><strong>Title</strong></p></div>
                            <div className="cart__price_col"><p><strong>Price</strong></p></div>
                            <div className="cart__quantity_col"><p><strong>Quantity</strong></p></div>
                            <div className="cart__total_col"><p><strong>Total</strong></p></div>
                            <div className="cart__remove_col"><p><strong>Remove</strong></p></div>
                        </div>
                        {products.map((el, i) => {
                            if(cartItems[el.id] > 0){
                                return(
                                    <div className="cart__top_row" key={i}>
                                        <div className="cart__image_col"><img src={el.image} alt="Product" /></div>
                                        <div className="cart__title_col"><p>{el.name}</p></div>
                                        <div className="cart__price_col"><p>Rs. {(el.new_price).toLocaleString('en-IN')}</p></div>
                                        <div className="cart__quantity_col"><p>{cartItems[el.id]}</p></div>
                                        <div className="cart__total_col"><p>Rs.{(el.new_price * cartItems[el.id]).toLocaleString('en-IN')}</p></div>
                                        <div className="cart__remove_col"><button onClick={() => {removeFromCart(el.id)}}><i className="fa-solid fa-trash-can"></i></button></div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="cart__bottom">
                        <h1 className="cart__total">Cart Total</h1>
                        <ul>
                            <li><span>Subtotal</span><span>Rs. {getTotalCartAmount()}</span></li>
                            <li><span>Shipping Charge</span><span>Free</span></li>
                            <li><span><strong>Total</strong></span><span><strong>Rs. {getTotalCartAmount()}</strong></span></li>
                        </ul>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
