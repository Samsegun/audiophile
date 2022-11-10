import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentWrapper } from "../../styles/global-styles";
import { findSingleProduct, splitParagraph } from "../../Utils/dataUtils";
import ProductAndCartDetails from "./ProductAndCartDetails";
import { Button } from "../../styles/Button";
import ProductCategories from "../../components/ProductsCategories/ProductCategories";
import About from "../../components/About/About";

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

const StyledSection = styled.section`
    .back-btn {
        font-weight: 500;
        font-size: 15px;
        background: none;
        border: none;
        line-height: 25px;
        opacity: 0.5;
    }
`;

const Heading = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    line-height: 36px;
    letter-spacing: 0.9px;
`;

const Features = styled.article`
    margin: 5.5rem 0;

    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
`;

const BoxContent = styled.div`
    .list {
        width: 100%;
    }
`;

const ListItem = styled.li`
    list-style-type: none;
    font-size: 15px;
    margin-bottom: 0.5rem;
    line-height: 25px;

    .qty {
        color: #d87d4a;
        font-weight: 700;
        margin-right: 1.5rem;
    }

    .item {
        text-transform: capitalize;
        opacity: 0.5;
    }
`;

const Gallery = styled.div`
    margin: 5.5rem 0;

    picture {
        display: block;
        margin-bottom: 1.3rem;
    }

    img {
        width: 100%;
        border-radius: 8px;
    }
`;

const OtherProducts = styled.div`
    text-align: center;
    margin-bottom: 7.5rem;

    .product {
        margin-bottom: 3.5rem;

        h3 {
            margin: 2rem 0;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 33px;
            letter-spacing: 1.7px;
        }
    }

    img {
        width: 100%;
        border-radius: 8px;
    }
`;

const Product = () => {
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
        <StyledSection>
            <ContentWrapper flex={false}>
                <button className='back-btn' onClick={() => navigate(-1)}>
                    Go Back
                </button>

                <ProductAndCartDetails item={product} id={id} />

                <Features>
                    <Heading>Features</Heading>

                    <p>{splitParagraph(productFeatures).textOne}</p>
                    <br />
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

                <Gallery>
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
                </Gallery>

                <OtherProducts>
                    <>
                        <Heading>you may also like</Heading>

                        {product[0].others.map((other, idx) => {
                            return (
                                <div className='product' key={idx}>
                                    <picture>
                                        <source
                                            srcSet={other.image.desktop}
                                            media='(min-width: 1280px)'
                                        />
                                        <source
                                            srcSet={other.image.tablet}
                                            media='(min-width: 768px)'
                                        />
                                        <source srcSet={other.image.mobile} />
                                        <img
                                            src={other.image.mobile}
                                            alt={other.name}
                                        />
                                    </picture>

                                    <h3>{other.name}</h3>

                                    <Button bgColor='#D87D4A'>
                                        see product
                                    </Button>
                                </div>
                            );
                        })}
                    </>
                </OtherProducts>

                <ProductCategories />

                <About marginTop='7.5rem' />
            </ContentWrapper>
        </StyledSection>
    );
};

export default Product;
