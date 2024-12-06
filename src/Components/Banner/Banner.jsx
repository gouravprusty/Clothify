import './Banner.css';
import {useNavigate} from 'react-router-dom';

export default function Banner() {

    const navigate = useNavigate();
    function handleClick(){
        navigate('./products')
    };

    return(
        <div className="banner">
            <div className="container">
                <div className="banner_inner">
                    <div className="banner__left">
                        <h2>Upgrade Your Wardrobe Today!</h2>
                        <h1>Discover the latest trends in <br />men’s, women’s, and kids’ fashion. <br />Shop now and enjoy exclusive discounts!</h1>
                        <button onClick={handleClick}>Shop Now</button>
                    </div>
                    <div className="banner__right">
                        <img src="/assets/images/hero_img.png" alt="Hero" />
                    </div>
                </div>
            </div>
        </div>
    )
};
