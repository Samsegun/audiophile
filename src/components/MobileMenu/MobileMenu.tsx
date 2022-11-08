import styled from "styled-components";
import ProductCategories from "../ProductsCategories/ProductCategories";

const Placeholder = styled.div`
    position: relative;
`;

const OuterWrapper = styled.div`
    position: absolute;
    top: 2%;
    left: 0;
    width: 100%;
    box-shadow: 0 10px 15px rgba(75, 75, 75, 0.6);
    z-index: 3;
`;

const Wrapper = styled.section`
    background: #fff;
    padding: 2rem 1.5rem;
`;

const MobileMenu = () => {
    return (
        <Placeholder>
            <OuterWrapper>
                <Wrapper>
                    <ProductCategories />
                </Wrapper>
            </OuterWrapper>
        </Placeholder>
    );
};

export default MobileMenu;
