import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../../styles/global-styles";
import cartIcon from "../../assets/cart-icon.png";
import navIcon from "../../assets/mobile-nav.png";
import logo from "../../assets/audiophile-logo.png";

const StyledHeader = styled.div`
    background: black;
    color: #fff;
`;

const Header = () => {
    return (
        <StyledHeader>
            <ContentWrapper flex={true}>
                <img src={navIcon} alt='navigation tab' />

                <img src={logo} alt='audiophile' />

                <img src={cartIcon} alt='cart' />
            </ContentWrapper>
        </StyledHeader>
    );
};

export default Header;
