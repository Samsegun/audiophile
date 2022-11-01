import styled from "styled-components";
import { ContentWrapper } from "../../styles/global-styles";
import About from "./About";
import Categories from "./ProductCategories";
import ProductShowcase from "./ProductShowcase";

const MainWrapper = styled.main`
    margin: 2.5rem 1.5rem;
`;

const Main = () => {
    return (
        <ContentWrapper flex={false}>
            <Categories />

            <ProductShowcase />

            <About />
        </ContentWrapper>
    );
};

export default Main;
