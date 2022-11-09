import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentWrapper } from "../../styles/global-styles";
import { findSingleProduct } from "../../Utils/dataUtils";
import ProductAndCartDetails from "./ProductAndCartDetails";

const StyledSection = styled.section`
    .back-btn {
        font-weight: 500;
        font-size: 15px;
        background: none;
        border: none;
        line-height: 25px;
        opacity: 0.5;
    }
`;

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // scroll to the top when page renders

        window.scrollTo({ top: 0 });
    }, [id]);

    const product = findSingleProduct(id);

    return (
        <StyledSection>
            <ContentWrapper flex={false}>
                <button className='back-btn' onClick={() => navigate(-1)}>
                    Go Back
                </button>

                <ProductAndCartDetails item={product} id={id} />

                <div>
                    <h2>Features</h2>

                    <p>{product[0].features}</p>
                </div>
            </ContentWrapper>
        </StyledSection>
    );
};

export default Product;
