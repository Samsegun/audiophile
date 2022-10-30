import styled from "styled-components";
import bg from "/assets/home/mobile/image-header.jpg";

const StyledHero = styled.div`
    min-height: 600px;
    background: url(${bg}) center/cover;
`;

const Home = () => {
    return (
        <StyledHero>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam,
            libero.
        </StyledHero>
    );
};

export default Home;
