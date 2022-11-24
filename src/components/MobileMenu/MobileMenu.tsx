import { useOnClickOutside } from "usehooks-ts";
import { useContext, useRef } from "react";
import styled from "styled-components";
import ProductCategories from "../ProductsCategories/ProductCategories";
import { MobileNavContext } from "../../store/mobileNavContext";

// const Placeholder = styled.div`
//     position: relative;
//     padding-top: 5.5rem;
// `;

const OuterWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 10px 15px rgba(75, 75, 75, 0.6);
    z-index: 4;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
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
    const { handleModal } = useContext(MobileNavContext);
    const ref = useRef(null);

    useOnClickOutside(ref, handleModal.bind(null, "backdrop"));

    return (
        // <Placeholder>
        <OuterWrapper ref={ref}>
            <Wrapper>
                <ProductCategories />
            </Wrapper>
        </OuterWrapper>
        // </Placeholder>
    );
};

export default MobileMenu;
