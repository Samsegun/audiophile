import { useNavigate } from "react-router-dom";
import { ShowcaseWrapper } from "../../styles/componentStyles/productShowcase";
import { Button } from "../../styles/Button";
import zx9 from "/assets/home/mobile/image-speaker-zx9.png";
import zx9Desk from "/assets/home/desktop/image-speaker-zx9.png";
import zx7 from "/assets/home/mobile/image-speaker-zx7.jpg";
import zx7Tab from "/assets/home/tablet/image-speaker-zx7.jpg";
import zx7Desk from "/assets/home/desktop/image-speaker-zx7.jpg";
import yx1 from "/assets/home/mobile/image-earphones-yx1.jpg";
import yx1Tab from "/assets/home/tablet/image-earphones-yx1.jpg";
import yx1Desk from "/assets/home/desktop/image-earphones-yx1.jpg";

const ProductShowcase = () => {
    const navigate = useNavigate();

    const navigateToProduct = (category: string, productName: string) => {
        navigate(`/category/${category}/${productName}`);
    };

    return (
        <ShowcaseWrapper>
            {/* zx9 speaker */}
            <div className='zx9'>
                <div className='img-wrapper'>
                    <picture>
                        <source srcSet={zx9Desk} media='(min-width: 1280px)' />
                        <source srcSet={zx9} />
                        <img src={zx9} alt='speaker' />
                    </picture>
                </div>

                <div className='info'>
                    <h2>
                        zx9 <br /> speaker
                    </h2>

                    <p>
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>

                    <Button
                        bgColor='#101010'
                        onClick={navigateToProduct.bind(
                            null,
                            "speakers",
                            "zx9-speaker"
                        )}>
                        SEE PRODUCT
                    </Button>
                </div>
            </div>

            {/* zx7 speaker */}
            <div className='zx7'>
                <div className='img-wrapper'>
                    <picture>
                        <source srcSet={zx7Desk} media='(min-width: 1280px)' />
                        <source srcSet={zx7Tab} media='(min-width: 768px)' />
                        <source srcSet={zx7} />
                        <img src={zx7} alt='speaker' />
                    </picture>
                </div>

                <div className='info'>
                    <h2>zx7 speaker</h2>
                    <Button
                        bgColor='transparent'
                        color='#000'
                        border='1px solid black'
                        onClick={navigateToProduct.bind(
                            null,
                            "speakers",
                            "zx7-speaker"
                        )}>
                        SEE PRODUCT
                    </Button>
                </div>
            </div>

            {/* yx1 earphone */}
            <div className='yx1'>
                <div className='img-wrapper'>
                    <picture>
                        <source srcSet={yx1Desk} media='(min-width: 1280px)' />
                        <source srcSet={yx1Tab} media='(min-width: 768px)' />
                        <source srcSet={yx1} />
                        <img src={yx1} alt='earphone' />
                    </picture>
                </div>

                <div className='info'>
                    <div>
                        <h2>yx1 earphones</h2>
                        <Button
                            bgColor='transparent'
                            color='#000'
                            border='1px solid black'
                            onClick={navigateToProduct.bind(
                                null,
                                "earphones",
                                "yx1-earphones"
                            )}>
                            SEE PRODUCT
                        </Button>
                    </div>
                </div>
            </div>
        </ShowcaseWrapper>
    );
};

export default ProductShowcase;
