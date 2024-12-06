import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({name, image, old_price, new_price, id}) {
    return(
        <Link to={`/buyProduct/${id}`} className="product-card">
            <div className="product__image" style={{backgroundImage: `url(${image})`}}>
                <img src={image} alt={name} loading='lazy'/>
            </div>
            <div className="product__about">
                <div className="product__about-top">
                    <h3 className="product__name">{name}</h3>
                    <div className="product__price">
                        <p className="product__price-new">Rs. {new_price.toLocaleString('en-IN')}</p>
                        <p className="product__price-old">Rs. {old_price.toLocaleString('en-IN')}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
};
