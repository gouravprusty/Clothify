import {useNavigate} from 'react-router-dom';
import Card from '../Components/Card/Card';
import './CSS/Home.css';
import { useContext } from 'react';
import { ProductsContext } from '../Context/ProductsContext';

export default function Home() {

    const navigate = useNavigate();
    function handleClick(page){
        navigate(page)
    };

    const {products} = useContext(ProductsContext);

    const getRandomProducts = (arr, limit) => {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, limit);
    };
    const featuredProducts = getRandomProducts(products, 8);
    const bestSellers = getRandomProducts(products, 8);

    return(
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner_inner">
                        <div className="banner__left">
                            <h2>Upgrade Your Wardrobe Today!</h2>
                            <h1>Discover the latest trends in <br />men’s, women’s, and kids’ fashion. <br />Shop now and enjoy exclusive discounts!</h1>
                            <button onClick={() => handleClick("./products")}>Shop Now</button>
                        </div>
                        <div className="banner__right">
                            <img src="/assets/images/hero_img.png" alt="Hero" loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-sellers">
                <div className="container">
                    <div className="best-sellers__inner">
                        <h1 className="main-heading">Featured Products</h1>
                        <div className="cards-tab">
                            {featuredProducts.map((item, i) => {
                                return <Card key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                            })}
                        </div>
                        <div className="common__button" onClick={() => handleClick("./products")}>View All</div>
                    </div>
                </div>
            </div>
            <div className="sale__section">
                <div className="container">
                    <div className="sale__inner">
                        <div className="sale__inner-left">
                            <h1 className='main-heading'>Hurry! Deals Ending Soon</h1>
                            <p>Grab your favorite styles at unbeatable prices. Limited-time offers on trendy outfits for men, women, and kids. Don’t miss out—shop now before they’re gone!</p>
                            <button onClick={() => handleClick("./products")}>Check Out Offers</button>
                        </div>
                        <div className="sale__inner-right">
                            <img src="/assets/images/sale_img.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="categories">
                <div className="container">
                    <div className="categories__inner">
                        <h1 className="main-heading">Fashion for Everyone</h1>
                        <div className="categories__row">
                            <div className="categories__column1">
                                <div className="categories__cloumn_text">
                                    <h3>Men's Fashion, Redefined</h3>
                                    <p>Shop trendy shirts, trousers, and jackets for every occasion.</p>
                                    <button  onClick={() => handleClick("./men")}>Shop Men’s</button>
                                </div>
                                <div className="categories__cloumn_image">
                                    <img src="/assets/images/men_sweater.png" alt="product" />
                                </div>
                            </div>
                            <div className="categories__column2">
                                <div className="categories__column2-top">
                                    <div className="categories__cloumn_text">
                                        <h3>Cool Styles for Boys</h3>
                                        <p>Shop trendy outfits, comfy tees, and more for every adventure.</p>
                                        <button onClick={() => handleClick("./boys")}>Shop Boys’</button>
                                    </div>
                                    <div className="categories__cloumn_image">
                                        <img src="/assets/images/boy_kid.png" alt="product" />
                                    </div>
                                </div>
                                <div className="categories__column2-top column3">
                                    <div className="categories__cloumn_image">
                                        <img src="/assets/images/girl_kid.png" alt="product" />
                                    </div>
                                    <div className="categories__cloumn_text">
                                        <h3>Trendy Looks for Girls</h3>
                                        <p>Find stylish dresses, cute tops, and more for every occasion.</p>
                                        <button onClick={() => handleClick("./girls")}>Shop Girls’</button>
                                    </div>
                                </div>
                            </div>
                            <div className="categories__column1 column3">
                                <div className="categories__cloumn_image">
                                    <img src="/assets/images/women_jeans.png" alt="product" />
                                </div>
                                <div className="categories__cloumn_text">
                                    <h3>Elevate Your Style</h3>
                                    <p>Discover chic dresses, tops, and accessories for every moment.</p>
                                    <button onClick={() => handleClick("./women")}>Shop Women’s</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose_section">
                <div className="container">
                    <div className="choose__inner">
                        <div className="choose__left">
                            <div className="choose__left-boxes box1"><div className="choose__icon"><i className="fa-solid fa-truck-fast"></i></div></div>
                            <div className="choose__left-boxes box2"><div className="choose__icon"><i className="fa-solid fa-tags"></i></div></div>
                            <div className="choose__left-boxes box3"><div className="choose__icon"><i className="fa-solid fa-handshake-simple"></i></div></div>
                            <div className="choose__left-boxes box4"><div className="choose__icon"><i className="fa-solid fa-arrow-right-arrow-left"></i></div></div>
                        </div>
                        <div className="choose__right">
                            <h1 className='main-heading'>Experience the Clothify Difference</h1>
                            <p>At Clothify, we prioritize your style and satisfaction. Enjoy premium-quality clothing, fast shipping, and hassle-free returns. With exclusive deals and unmatched customer service, we’re here to make your shopping experience seamless and enjoyable. Discover the difference with Clothify today!</p>
                            <button onClick={() => handleClick("./products")}>Try us NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-sellers">
                <div className="container">
                    <div className="best-sellers__inner">
                        <h1 className="main-heading">Best Sellers</h1>
                        <div className="cards-tab">
                            {bestSellers.map((item, i) => {
                                return <Card key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                            })}
                        </div>
                        <div className="common__button" onClick={() => handleClick("./products")}>View All</div>
                    </div>
                </div>
            </div>
        </>
    )
};