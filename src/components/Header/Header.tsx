import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../../styles/global-styles";
import cartIcon from "../../assets/cart-icon.png";
import navIcon from "../../assets/mobile-nav.png";
import logo from "../../assets/audiophile-logo.png";

const StyledHeader = styled.header`
    background: black;
    color: #fff;

    button {
        background: none;
        border: none;
    }

    .logo-menu {
        flex-basis: 65%;
        display: flex;
        justify-content: space-between;

        @media screen and (min-width: 768px) {
            flex-basis: 30%;
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <ContentWrapper flex={true}>
                <div className='logo-menu'>
                    <button>
                        <img src={navIcon} alt='navigation tab' />
                    </button>

                    <img src={logo} alt='audiophile' />
                </div>

                <button>
                    <img src={cartIcon} alt='cart' />
                </button>
            </ContentWrapper>
        </StyledHeader>
    );
};

export default Header;
