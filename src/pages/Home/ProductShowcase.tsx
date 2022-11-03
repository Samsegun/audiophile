import styled from "styled-components";
import { Button } from "../../styles/Button";
import zx9 from "/assets/home/mobile/image-speaker-zx9.png";
import zx9Desk from "/assets/home/desktop/image-speaker-zx9.png";
import zx7 from "/assets/home/mobile/image-speaker-zx7.jpg";
import zx7Tab from "/assets/home/tablet/image-speaker-zx7.jpg";
import zx7Desk from "/assets/home/desktop/image-speaker-zx7.jpg";
import yx1 from "/assets/home/mobile/image-earphones-yx1.jpg";
import yx1Tab from "/assets/home/tablet/image-earphones-yx1.jpg";
import yx1Desk from "/assets/home/desktop/image-earphones-yx1.jpg";

const ShowcaseWrapper = styled.section`
    margin: 7.5rem 0;
    font-weight: 700;

    /* zx9 speaker starts here */
    .zx9 {
        background: #d87d4a;
        color: #fff;
        text-align: center;
        padding: 3.7rem 0;
        border-radius: 8px;

        .img-wrapper {
            margin: auto;
            max-width: 178px;

            @media screen and (min-width: 768px) {
                max-width: 198px;
            }

            @media screen and (min-width: 1280px) {
                /* position: absolute; */
                max-width: fit-content;
                width: 410px;
            }

            img {
                width: 100%;
            }
        }

        .info {
            margin-top: 2rem;

            @media screen and (min-width: 768px) {
                margin: 4rem auto;
                max-width: 350px;
            }

            @media screen and (min-width: 1280px) {
                text-align: left;
            }

            h2 {
                font-size: 2.25rem;
                text-transform: uppercase;
                letter-spacing: 1.29px;

                @media screen and (min-width: 768px) {
                    font-size: 3.5rem;
                    letter-spacing: 2px;
                }
            }

            p {
                margin: 1.5rem;
                font-size: 15px;
                font-weight: 500;
                opacity: 0.75;
                line-height: 25px;

                @media screen and (min-width: 768px) {
                    margin: 1.5rem 0 2.5rem;
                }
            }
        }

        @media screen and (min-width: 1280px) {
            /* position: relative; */
            display: flex;
            padding-bottom: 0;
        }
    }
    /* zx9 speaker ends here */

    /* zx7 speaker starts here */
    .zx7 {
        position: relative;
        margin: 1.5rem 0;

        .img-wrapper {
            img {
                border-radius: 8px;
                width: 100%;
            }
        }

        .info {
            position: absolute;
            top: 50%;
            left: 8%;
            transform: translateY(-50%);
            text-transform: uppercase;

            h2 {
                font-size: 1.75rem;
                margin-bottom: 1.5rem;
                letter-spacing: 2px;
            }
        }
    }

    /* yx1 speaker starts here */
    .yx1 {
        @media screen and (min-width: 768px) {
            display: flex;
            align-items: center;
            gap: 12px;

            & > * {
                flex-basis: 50%;
            }
        }

        @media screen and (min-width: 1280px) {
            gap: 30px;
        }

        .img-wrapper {
            width: 100%;

            img {
                width: 100%;
                border-radius: 8px;
            }
        }

        .info {
            background: #f1f1f1;

            margin-top: 1.5rem;
            padding: 2.5rem 1.5rem;
            border-radius: 8px;
            text-transform: uppercase;

            @media screen and (min-width: 768px) {
                margin-top: 0;
                align-self: stretch;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            h2 {
                font-size: 1.75rem;
                margin-bottom: 1.5rem;
                letter-spacing: 2px;
            }
        }
    }
`;

const ProductShowcase = () => {
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

                    <Button bgColor='#101010'>SEE PRODUCT</Button>
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
                        border='1px solid black'>
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
                            border='1px solid black'>
                            SEE PRODUCT
                        </Button>
                    </div>
                </div>
            </div>
        </ShowcaseWrapper>
    );
};

export default ProductShowcase;
