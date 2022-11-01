import styled from "styled-components";
import { Button } from "../../styles/Button";
import zx9 from "/assets/home/mobile/image-speaker-zx9.png";
import zx7 from "/assets/home/mobile/image-speaker-zx7.jpg";
import yx1 from "/assets/home/mobile/image-earphones-yx1.jpg";

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
            padding: 0 77px;

            img {
                width: 100%;
            }
        }

        .info {
            margin-top: 2rem;

            h2 {
                font-size: 2.25rem;
                text-transform: uppercase;
                letter-spacing: 1.29px;
            }

            p {
                margin: 1.5rem;
                font-size: 15px;
                font-weight: 500;
                opacity: 0.75;
                line-height: 25px;
            }
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
                    <img src={zx9} alt='speaker' />
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
                    <img src={zx7} alt='speaker' />
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
                    <img src={yx1} alt='' />
                </div>

                <div className='info'>
                    <h2>yx1 earphones</h2>
                    <Button
                        bgColor='transparent'
                        color='#000'
                        border='1px solid black'>
                        SEE PRODUCT
                    </Button>
                </div>
            </div>
        </ShowcaseWrapper>
    );
};

export default ProductShowcase;
