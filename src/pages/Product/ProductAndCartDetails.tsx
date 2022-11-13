import { Wrapper, ProductText, CartButtons } from "../../styles/Product";
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

const ProductAndCartDetails: React.FC<Props> = ({ item }) => {
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
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                    <button className='cart-btn'>add to cart</button>
                </CartButtons>
            </ProductText>
        </Wrapper>
    );
};

export default ProductAndCartDetails;
