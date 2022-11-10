import styled from "styled-components";
import bestGear from "/assets/shared/mobile/image-best-gear.jpg";
import bestGearTab from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearDesk from "/assets/shared/desktop/image-best-gear.jpg";

const AboutWrapper = styled.section<{ marginTop?: string }>`
    margin-top: ${props => (props.marginTop ? props.marginTop : null)};
    margin-bottom: 7.5rem;

    .img-wrapper {
        /* width: 100%; */
        img {
            width: 100%;
            border-radius: 8px;
        }

        @media screen and (min-width: 1280px) {
            flex-basis: 50%;
            order: 1;
        }
    }

    .info {
        margin-top: 2.5rem;
        text-align: center;

        @media screen and (min-width: 768px) {
            width: 80%;
            margin: 3rem auto;
            line-height: 44px;
        }

        @media screen and (min-width: 1280px) {
            flex-basis: 50%;
            text-align: left;
            padding-right: 6rem;
        }

        h2 {
            font-weight: 700;
            font-size: 1.75rem;
            margin-bottom: 2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 38px;

            @media screen and (min-width: 768px) {
                font-size: 2.5rem;
            }

            @media screen and (min-width: 1280px) {
                letter-spacing: 1.5px;
                line-height: 44px;
            }

            span {
                color: #d87d4a;
            }
        }

        p {
            font-size: 0.94rem;
            font-weight: 500;
            line-height: 25px;
            opacity: 0.5;
        }
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        align-items: center;
        gap: 3rem;
    }
`;

const About: React.FC<{ marginTop?: string }> = ({ marginTop }) => {
    return (
        <AboutWrapper marginTop={marginTop}>
            <div className='img-wrapper'>
                <picture>
                    <source srcSet={bestGearDesk} media='(min-width: 1280px)' />
                    <source srcSet={bestGearTab} media='(min-width: 768px)' />
                    <source srcSet={bestGear} />
                    <img src={bestGear} alt='' />
                </picture>
            </div>

            <div className='info'>
                <h2>
                    bringing you the <span>best</span> audio gear
                </h2>

                <p>
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
        </AboutWrapper>
    );
};

export default About;
