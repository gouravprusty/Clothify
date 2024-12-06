import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import './CSS/Categories.css';
import category_data from "../Data/category_data";
import Card from "../Components/Card/Card";
import groupedBySubCategory from "../Data/groupedBySubCategory";

export default function Categories({category}) {
    const {products} = useContext(ProductsContext);

    const groupedProducts = groupedBySubCategory(products, category);
    
    return(
        <>
            <div className="categories_hero">
                <div className="container">
                    {category_data.map((data, i) => {
                        if(category === data.category){
                            return(
                                <div className="categories_hero__inner" key={i}>
                                    <div className="categories_hero__left">
                                        <h1>{data.head}</h1>
                                        <p>{data.para}</p>
                                    </div>
                                    <div className="categories_hero__right">
                                        <img src={data.image} alt="Image" />
                                    </div>
                                </div>
                            )
                        }else{
                            return null;
                        }
                    })}
                </div>
            </div>
            <div className="categories__main">
                <div className="container">
                    <div className="categories__main_inner">
                        {Object.keys(groupedProducts).map((subCategory) => {
                            return(
                                <div className="categories__inner_row" key={subCategory}>
                                    <h1 className="categories__inner_type">{subCategory}</h1>
                                    <div className="categories__inner_tab">
                                        {groupedProducts[subCategory].map((item, i) => (
                                            <Card key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
};
