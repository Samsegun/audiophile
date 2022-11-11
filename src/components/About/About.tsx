import { AboutWrapper } from "../../styles/componentStyles/about";
import bestGear from "/assets/shared/mobile/image-best-gear.jpg";
import bestGearTab from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearDesk from "/assets/shared/desktop/image-best-gear.jpg";

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
