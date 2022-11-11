import {
    StyledHero,
    HeroText,
    HeroTextWrapper,
    DarkOverlay,
} from "../../styles/componentStyles/hero";
import { Button } from "../../styles/Button";
import { useNavigate } from "react-router-dom";

const image = {
    mobileBg: "/assets/home/mobile/image-header.jpg",
    tabletBg: "/assets/home/tablet/image-header.jpg",
    desktopBg: "/assets/home/desktop/image-hero.jpg",
};

const Hero = () => {
    const navigate = useNavigate();

    const category = "headphones";

    const navigateToProduct = (productName: string) => {
        navigate(`/category/${category}/${productName}`);
    };

    return (
        <StyledHero>
            <HeroTextWrapper>
                <HeroText>
                    <span>New Product</span>
                    <h1>
                        XX99 Mark II <br />
                        HeadphoneS
                    </h1>
                    <p>
                        Experience natural, lifelike audio and exceptional build
                        quality made for the passionate music enthusiast.
                    </p>

                    <Button
                        bgColor='#D87D4A'
                        onClick={navigateToProduct.bind(
                            null,
                            "xx99-mark-two-headphones"
                        )}>
                        see product
                    </Button>
                </HeroText>
            </HeroTextWrapper>

            <picture>
                <source srcSet={image.desktopBg} media='(min-width: 1280px)' />
                <source srcSet={image.tabletBg} media='(min-width: 768px)' />
                <source srcSet={image.mobileBg} />
                <img src={image.mobileBg} alt='' />
            </picture>
            <DarkOverlay />
        </StyledHero>
    );
};

export default Hero;
