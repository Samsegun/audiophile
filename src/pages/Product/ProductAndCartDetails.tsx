import styled from "styled-components";
import { splitName } from "../../Utils/dataUtils";

interface ProductProps {
    id: number;
    slug: string;
    new: boolean;
    price: number;
    name: string;
    description: string;
    category: string;
    categoryImage: {};
    image: { mobile: string; tablet: string; desktop: string };
    features: string;
    gallery: {};
    includes: {}[];
    others: {}[];
}

interface Props {
    item: ProductProps[];
    id: string | undefined;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .img-wrapper {
        margin: 1.5rem 0 2rem;

        img {
            width: 100%;
            border-radius: 8px;
        }
    }
`;

const ProductText = styled.div`
    text-align: left;

    .new {
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
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .desc {
        font-weight: 500;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        padding: 0 0.5rem;
        line-height: 25px;
        opacity: 0.5;
    }

    .price {
        font-weight: 700;
        font-size: 1.13rem;
        line-height: 25px;
        letter-spacing: 1.3px;
    }
`;

const CartButtons = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;

    & > * {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: none;
        font-weight: 700;
        font-size: 0.82rem;
        line-height: 18px;
        text-transform: uppercase;
    }

    .qty {
        background: #f1f1f1;
        width: 120px;
        height: 48px;

        button {
            border: none;
        }
    }
    .cart-btn {
        background-color: #d87d4a;
        color: #fff;
        width: 160px;
        height: 48px;
        letter-spacing: 1px;
    }
`;

const ProductAndCartDetails: React.FC<Props> = ({ item, id }) => {
    const product = item[0];

    return (
        <Wrapper>
            <div className='img-wrapper'>
                <picture>
                    <source
                        srcSet={product.image.desktop}
                        media='(min-width: 1280px)'
                    />
                    <source
                        srcSet={product.image.tablet}
                        media='(min-width: 768px)'
                    />
                    <source srcSet={product.image.mobile} />
                    <img src={product.image.mobile} alt={product.name} />
                </picture>
            </div>

            <ProductText>
                {product.new && <span className='new'>new product</span>}

                <h1>
                    {splitName(product.name).firstLine}
                    <br />
                    {splitName(product.name).secondLine}
                </h1>

                <p className='desc'>{product.description}</p>

                <span className='price'>
                    $ {product.price.toLocaleString()}
                </span>

                <CartButtons>
                    <div className='qty'>
                        <button>-</button>0<button>+</button>
                    </div>
                    <button className='cart-btn'>add to cart</button>
                </CartButtons>
            </ProductText>
        </Wrapper>
    );
};

export default ProductAndCartDetails;
