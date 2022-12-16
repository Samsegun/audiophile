import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    ProductSection,
    ProductWrapper,
    ProductText,
} from "../../styles/Category";
import { Button } from "../../styles/Button";
import { ContentWrapper } from "../../styles/global-styles";
import Categories from "../Home/Categories";
import { filterAndOrderData, splitName } from "../../Utils/dataUtils";
import About from "../../components/About/About";
import { MobileNavContext } from "../../store/mobileNavContext";

const Category = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { handleModal } = useContext(MobileNavContext);

    useEffect(() => {
        // scroll to the top when page renders
        window.scrollTo({ top: 0 });

        handleModal("backdrop");
    }, [id]);

    const orderedCategoryData = filterAndOrderData(id);

    const navigateToProduct = (productName: string) => {
        navigate(`/category/${id}/${productName}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}>
            <ProductSection>
                <div className='title-wrapper'>
                    <h1>{id}</h1>
                </div>

                <ContentWrapper flex={false}>
                    {orderedCategoryData.map((category, idx) => {
                        return (
                            <ProductWrapper key={category.id}>
                                <ProductText
                                    switchOrder={idx % 2 === 0 ? true : false}>
                                    <div className='img-wrapper'>
                                        <picture>
                                            <source
                                                srcSet={
                                                    category.categoryImage
                                                        .desktop
                                                }
                                                media='(min-width: 1280px)'
                                            />
                                            <source
                                                srcSet={
                                                    category.categoryImage
                                                        .tablet
                                                }
                                                media='(min-width: 768px)'
                                            />
                                            <source
                                                srcSet={
                                                    category.categoryImage
                                                        .mobile
                                                }
                                            />
                                            <img
                                                src={
                                                    category.categoryImage
                                                        .mobile
                                                }
                                                alt={category.name}
                                            />
                                        </picture>
                                    </div>

                                    <div className='text-wrapper'>
                                        {category.new && (
                                            <span>new product</span>
                                        )}

                                        <h1>
                                            {splitName(category.name).firstLine}
                                            <br />
                                            {
                                                splitName(category.name)
                                                    .secondLine
                                            }
                                        </h1>

                                        <p>{category.description}</p>

                                        <Button
                                            bgColor='#D87D4A'
                                            onClick={navigateToProduct.bind(
                                                null,
                                                category.slug
                                            )}>
                                            see product
                                        </Button>
                                    </div>
                                </ProductText>
                            </ProductWrapper>
                        );
                    })}
                    <Categories />

                    <About marginTop='7.5rem' />
                </ContentWrapper>
            </ProductSection>
        </motion.div>
    );
};

export default Category;
