import styled from "styled-components";
import { ContentWrapper } from "../../styles/global-styles";
import About from "../../components/About/About";
import Categories from "./Categories";
import ProductShowcase from "./ProductShowcase";

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
