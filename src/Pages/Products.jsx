import {useNavigate} from 'react-router-dom';
import Card from '../Components/Card/Card';
import './CSS/Products.css';
import { useContext } from 'react';
import { ProductsContext } from '../Context/ProductsContext';

export default function Products() {

    const navigate = useNavigate();

    const categories = [
        { name: "Men's", route: "/men", type: "men" },
        { name: "Women's", route: "/women", type: "women" },
        { name: "Boys'", route: "/boys", type: "boys" },
        { name: "Girls'", route: "/girls", type: "girls" },
    ];

    const {products} = useContext(ProductsContext);

    return(
        <div className="products-page">
        <div className="container">
            <div className="products__inner">
                <h1 className="page-heading">All Products</h1>
                {categories.map((category) => {
                    const filteredProducts = products.filter((product) => product.category === category.type);
                    const randomProducts = [...filteredProducts].sort(() => Math.random() - 0.5).slice(0, 8);
                    if(randomProducts.length > 0){
                        return(
                            <div className="product__row" key={category.type}>
                                <div className="product__sub-head">
                                   <h2>{category.name}</h2>
                                   <button onClick={() => navigate(category.route)}>View All</button>
                               </div>
                               <div className="product__tab">
                                    {randomProducts.map((item, i) => {
                                        return <Card key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                                    })}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    </div>
    )
};
