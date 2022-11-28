import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/Button";
import { Heading, OtherProducts } from "../../styles/Product";
import { navigateOtherProducts } from "../../Utils/dataUtils";

interface OthersProps {
    product: {
        slug: string;
        name: string;
        image: { mobile: string; tablet: string; desktop: string };
    }[];
    category: string;
}

const OtherProduct: React.FC<OthersProps> = ({ product, category }) => {
    const navigate = useNavigate();

    return (
        <OtherProducts>
            <>
                <Heading>you may also like</Heading>

                <div className='product-wrapper'>
                    {product.map((other, idx) => {
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

                                <Button
                                    bgColor='#D87D4A'
                                    onClick={() =>
                                        navigate(
                                            `/category/${category}/${other.slug}`
                                        )
                                    }>
                                    see product
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </>
        </OtherProducts>
    );
};

export default OtherProduct;
