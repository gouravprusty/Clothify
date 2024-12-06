const groupedBySubCategory = (products, category) => {
    const grouped = {};
    products.filter((element) => element.category === category).forEach((element) => {
        if(!grouped[element.subCategory]){
            grouped[element.subCategory] = []
        }
        grouped[element.subCategory].push(element);
    });
    return grouped;
};
export default groupedBySubCategory;