import { useContext } from 'react';
import { ProductsContext } from '../Context/ProductsContext';
import { useParams } from 'react-router-dom';
import './CSS/BuyProduct.css';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';

export default function BuyProduct() {
    const {products, addToCart} = useContext(ProductsContext);
    const {productId} = useParams();
    const item = products.find((el) => el.id === Number(productId));

    return(
        <>
            <Breadcrumb category={item.category} subCategory={item.subCategory} name={item.name}/>
            <div className="buy_product">
                <div className="container">
                    <div className="buy_inner">
                        <div className="buy_inner__left">
                            <div className="buy__left_list">
                                <img src={item.image} alt="image" />
                                <img src={item.image} alt="image" />
                                <img src={item.image} alt="image" />
                                <img src={item.image} alt="image" />
                            </div>
                            <div className="buy__left_img">
                                <img src={item.image} alt="image" />
                            </div>
                        </div>
                        <div className="buy_inner__right">
                            <h1 className="buy__right_name">{item.name}</h1>
                            <p className="buy__right_tags"><strong>Tags:</strong> {(item.category).charAt(0).toUpperCase()+(item.category).slice(1)}, {item.subCategory}</p>
                            <div className="buy_right_stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="buy__right_prices">
                                <p className='buy__old_price'>Rs. {(item.old_price).toLocaleString('en-IN')}</p>
                                <p className='buy__new_price'>Rs. {(item.new_price).toLocaleString('en-IN')}</p>
                            </div>
                            <p className="buy__size_head">Select Your Size:</p>
                            <div className="buy__size_btns">
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                                <p>XL</p>
                                <p>XXL</p>
                            </div>
                            <button className="buy__button" onClick={() => {addToCart(item.id)}}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
