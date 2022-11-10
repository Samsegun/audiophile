import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { ContentWrapper } from "../../styles/global-styles";
import Categories from "../Home/Categories";
import { filterAndOrderData, splitName } from "../../Utils/dataUtils";
import About from "../../components/About/About";

const ProductSection = styled.section`
    .title-wrapper {
        background: #000;
        color: #fff;
        font-size: 1.2rem;
        padding: 2rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 38px;
    }
`;

const ProductWrapper = styled.div`
    margin: 4rem 0 7.5rem;
    text-align: center;
`;

const ProductText = styled.article`
    .img-wrapper {
        margin-bottom: 2rem;
    }

    img {
        width: 100%;
        border-radius: 8px;
    }

    span {
        color: #d87d4a;
        font-size: 0.88rem;
        letter-spacing: 10px;
        line-height: 19px;
        text-transform: uppercase;
    }

    h1 {
        font-weight: 700;
        font-size: 1.75rem;
        margin: 1.5rem 0;
        line-height: 38px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    p {
        font-weight: 500;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        padding: 0 0.5rem;
        line-height: 25px;
    }
`;

const Category = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // scroll to the top when page renders

        window.scrollTo({ top: 0 });
    }, [id]);

    const orderedCategoryData = filterAndOrderData(id);

    const navigateToProduct = (productName: string) => {
        navigate(`/category/${id}/${productName}`);
    };

    return (
        <ProductSection>
            <div className='title-wrapper'>
                <h1>{id}</h1>
            </div>

            <ContentWrapper flex={false}>
                {orderedCategoryData.map(category => {
                    return (
                        <ProductWrapper key={category.id}>
                            <ProductText>
                                <div className='img-wrapper'>
                                    <picture>
                                        <source
                                            srcSet={
                                                category.categoryImage.desktop
                                            }
                                            media='(min-width: 1280px)'
                                        />
                                        <source
                                            srcSet={
                                                category.categoryImage.tablet
                                            }
                                            media='(min-width: 768px)'
                                        />
                                        <source
                                            srcSet={
                                                category.categoryImage.mobile
                                            }
                                        />
                                        <img
                                            src={category.categoryImage.mobile}
                                            alt={category.name}
                                        />
                                    </picture>
                                </div>

                                {category.new && <span>new product</span>}

                                <h1>
                                    {splitName(category.name).firstLine}
                                    <br />
                                    {splitName(category.name).secondLine}
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
                            </ProductText>
                        </ProductWrapper>
                    );
                })}
                <Categories />

                <About marginTop='7.5rem' />
            </ContentWrapper>
        </ProductSection>
    );
};

export default Category;
