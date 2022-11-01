import styled from "styled-components";
import bestGear from "/assets/shared/mobile/image-best-gear.jpg";

const AboutWrapper = styled.section`
    margin-bottom: 7.5rem;

    .img-wrapper {
        /* width: 100%; */
        img {
            width: 100%;
            border-radius: 8px;
        }
    }

    .info {
        margin-top: 2.5rem;
        text-align: center;

        h2 {
            font-weight: 700;
            font-size: 1.75rem;
            margin-bottom: 2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 38px;

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
`;

const About = () => {
    return (
        <AboutWrapper>
            <div className='img-wrapper'>
                <img src={bestGear} alt='' />
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
