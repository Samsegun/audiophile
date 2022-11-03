import styled from "styled-components";
import { Button } from "../../styles/Button";
import mobileBg from "/assets/home/mobile/image-header.jpg";
import TabletBg from "/assets/home/tablet/image-header.jpg";
import DesktopBg from "/assets/home/desktop/image-hero.jpg";

const StyledHero = styled.div`
    position: relative;
    width: 100%;
    & img {
        width: 100%;
    }
    /* 
    @media screen and (min-width: 1280px) {
        height: 632px;

        & img {
            height: 100%;
        }
    } */
`;

const HeroTextWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    margin: auto;

    @media screen and (min-width: 1280px) {
        justify-content: start;
        padding: 0 2.5rem;
    }
`;

const HeroText = styled.div`
    width: 328px;
    margin-top: 5rem;
    text-align: center;
    color: #fff;
    z-index: 2;

    & span,
    h1 {
        text-transform: uppercase;
    }
    & span {
        font-size: 0.88rem;
        opacity: 0.5;
        mix-blend-mode: normal;
        letter-spacing: 10px;
    }
    & h1 {
        font-size: 2.25rem;
        margin: 1rem 0 1.5rem;
        letter-spacing: 2.29px;

        @media screen and (min-width: 768px) {
            font-size: 3.5rem;
        }
    }
    & p {
        font-size: 0.9rem;
        margin-bottom: 1.75rem;
        padding: 0 1rem;
        line-height: 25px;
        letter-spacing: 0.3px;
        mix-blend-mode: normal;
        opacity: 0.75;

        @media screen and (min-width: 1280px) {
            padding: 0 1rem 0 0;
        }
    }

    @media screen and (min-width: 768px) {
        width: 380px;
        margin-top: 3rem;
    }

    @media screen and (min-width: 1280px) {
        text-align: left;
    }
`;

const DarkOverlay = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

const Hero = () => {
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

                    <Button bgColor='#D87D4A'>see product</Button>
                </HeroText>
            </HeroTextWrapper>

            <picture>
                <source srcSet={DesktopBg} media='(min-width: 1280px)' />
                <source srcSet={TabletBg} media='(min-width: 768px)' />
                <source srcSet={mobileBg} />
                <img src={mobileBg} alt='' />
            </picture>
            <DarkOverlay />
        </StyledHero>
    );
};

export default Hero;
