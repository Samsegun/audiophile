import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentWrapper } from "../../styles/global-styles";
import {
    StyledSection,
    Features,
    Heading,
    BoxContent,
    Gallery,
    ListItem,
    FeaturesAndContent,
} from "../../styles/Product";
import { findSingleProduct, splitParagraph } from "../../Utils/dataUtils";
import ProductAndCartDetails from "./ProductAndCartDetails";
import ProductCategories from "../../components/ProductsCategories/ProductCategories";
import About from "../../components/About/About";
import OtherProduct from "./OtherProducts";

interface GalleryPropType {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface GalleryProps {
    first: GalleryPropType;
    second: GalleryPropType;
    third: GalleryPropType;
}

const Product: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // scroll to the top when page renders

        window.scrollTo({ top: 0 });
    }, [id]);

    const product = findSingleProduct(id);
    const productFeatures = product[0].features;
    const productContents = product[0].includes;
    const productGallery: GalleryProps = product[0].gallery;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}>
            <StyledSection>
                <ContentWrapper flex={false}>
                    <button className='back-btn' onClick={() => navigate(-1)}>
                        Go Back
                    </button>

                    <ProductAndCartDetails item={product} id={id} />

                    <FeaturesAndContent>
                        <Features>
                            <Heading>Features</Heading>

                            <p>{splitParagraph(productFeatures).textOne}</p>
                            <br />
                            <p>{splitParagraph(productFeatures).textTwo}</p>
                        </Features>

                        <BoxContent>
                            <Heading>in the box</Heading>

                            <div className='list'>
                                <ul>
                                    {productContents.map((content, idx) => {
                                        return (
                                            <ListItem key={idx}>
                                                <span className='qty'>
                                                    {content.quantity}X
                                                </span>
                                                <span className='item'>
                                                    {content.item}
                                                </span>
                                            </ListItem>
                                        );
                                    })}
                                </ul>
                            </div>
                        </BoxContent>
                    </FeaturesAndContent>

                    <Gallery>
                        <div className='img-wrapper'>
                            <picture>
                                <source
                                    srcSet={productGallery.first.desktop}
                                    media='(min-width: 1280px)'
                                />
                                <source
                                    srcSet={productGallery.first.tablet}
                                    media='(min-width: 768px)'
                                />
                                <source srcSet={productGallery.first.mobile} />
                                <img
                                    src={productGallery.first.mobile}
                                    alt={product[0].name}
                                />
                            </picture>
                        </div>

                        <div className='img-wrapper'>
                            <picture>
                                <source
                                    srcSet={productGallery.second.desktop}
                                    media='(min-width: 1280px)'
                                />
                                <source
                                    srcSet={productGallery.second.tablet}
                                    media='(min-width: 768px)'
                                />
                                <source srcSet={productGallery.second.mobile} />
                                <img
                                    src={productGallery.second.mobile}
                                    alt={product[0].name}
                                />
                            </picture>
                        </div>

                        <div className='img-wrapper'>
                            <picture>
                                <source
                                    srcSet={productGallery.third.desktop}
                                    media='(min-width: 1280px)'
                                />
                                <source
                                    srcSet={productGallery.third.tablet}
                                    media='(min-width: 768px)'
                                />
                                <source srcSet={productGallery.third.mobile} />
                                <img
                                    src={productGallery.third.mobile}
                                    alt={product[0].name}
                                />
                            </picture>
                        </div>
                    </Gallery>

                    <OtherProduct
                        product={product[0].others}
                        category={product[0].category}
                    />

                    <ProductCategories />

                    <About marginTop='7.5rem' />
                </ContentWrapper>
            </StyledSection>
        </motion.div>
    );
};

export default Product;
