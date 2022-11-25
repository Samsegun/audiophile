import { useOnClickOutside } from "usehooks-ts";
import { useContext, useRef } from "react";
import styled from "styled-components";
import ProductCategories from "../ProductsCategories/ProductCategories";
import { MobileNavContext } from "../../store/mobileNavContext";

const OuterWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100vh;
    box-shadow: 0 10px 15px rgba(75, 75, 75, 0.6);
    z-index: 4;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    overflow-y: scroll;
`;

const Wrapper = styled.section`
    background: #fff;
    padding: 8rem 1.5rem 1.5rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    @media screen and (min-width: 768px) {
        padding-top: 5rem;
    }
`;

const MobileMenu = () => {
    return (
        <OuterWrapper>
            <Wrapper>
                <ProductCategories />
            </Wrapper>
        </OuterWrapper>
    );
};

export default MobileMenu;
