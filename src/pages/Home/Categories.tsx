import ProductCategories from "../../components/ProductsCategories/ProductCategories";

// const categoryData = [
//     {
//         title: "headphones",
//         img: "/assets/shop-now/category-headphones.png",
//     },

//     { title: "speakers", img: "/assets/shop-now/category-speakers.png" },
//     {
//         title: "earphones",
//         img: "/assets/shop-now/category-earphones.png",
//     },
// ];

const Categories = () => {
    return (
        <ProductCategories />

        // <Wrapper>
        //     {categoryData.map((category, idx) => {
        //         return (
        //             <CategorySection key={idx}>
        //                 <CategoryWrapper>
        //                     <div className='imgContainer'>
        //                         <img
        //                             src={category.img}
        //                             alt=''
        //                             className='showcaseImg'
        //                         />
        //                     </div>

        //                     <div className='info'>
        //                         <p>{category.title}</p>
        //                         <button>
        //                             SHOP <img src={arrowRight} alt='shop now' />
        //                         </button>
        //                     </div>
        //                 </CategoryWrapper>
        //             </CategorySection>
        //         );
        //     })}
        // </Wrapper>
    );
};

export default Categories;
