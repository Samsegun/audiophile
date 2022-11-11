import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    CategorySection,
    Wrapper,
    CategoryWrapper,
} from "../../styles/componentStyles/productCategories";
import arrowRight from "../../assets/arrow-right.svg";
import { MobileNavContext } from "../../store/mobileNavContext";

const categoryData = [
    {
        title: "headphones",
        img: "/assets/shop-now/category-headphones.png",
    },

    { title: "speakers", img: "/assets/shop-now/category-speakers.png" },
    {
        title: "earphones",
        img: "/assets/shop-now/category-earphones.png",
    },
];

const ProductCategories = () => {
    const mobileCtx: { handleModal: (a?: string) => void } =
        useContext(MobileNavContext);
    const navigate = useNavigate();

    const productNavHandler = (title: string) => {
        mobileCtx.handleModal("backdrop");
        navigate(`/category/${title}`);
    };

    return (
        <Wrapper>
            {categoryData.map((category, idx) => {
                return (
                    <CategorySection
                        key={idx}
                        onClick={productNavHandler.bind(null, category.title)}>
                        <CategoryWrapper>
                            <div className='imgContainer'>
                                <img
                                    src={category.img}
                                    alt=''
                                    className='showcaseImg'
                                />
                            </div>

                            <div className='info'>
                                <p>{category.title}</p>
                                <button>
                                    SHOP <img src={arrowRight} alt='shop now' />
                                </button>
                            </div>
                        </CategoryWrapper>
                    </CategorySection>
                );
            })}
        </Wrapper>
    );
};

export default ProductCategories;
