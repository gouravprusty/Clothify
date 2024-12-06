import './Breadcrumb.css'

export default function Breadcrumb({category, subCategory, name}) {
    return(
        <div className="breadcrumb">
            <div className="container">
                <p className="breadcrumb__inner">
                    {(category).charAt(0).toUpperCase() + (category).slice(1)} <i className="fa-solid fa-angle-right"></i> {subCategory} <i className="fa-solid fa-angle-right"></i> {name}
                </p>
            </div>
        </div>
    )    
};
