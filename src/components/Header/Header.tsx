import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContentWrapper } from "../../styles/global-styles";
import cartIcon from "../../assets/cart-icon.png";
import navIcon from "../../assets/mobile-nav.png";
import logo from "../../assets/audiophile-logo.png";

interface HeaderProps {
    headRef: () => void;
    modalHandler: () => void;
}

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

        button {
            @media screen and (min-width: 1280px) {
                display: none;
            }
        }

        @media screen and (min-width: 768px) {
            flex-basis: 30%;
        }

        @media screen and (min-width: 1280px) {
            flex-basis: auto;
        }
    }

    .nav-bar {
        display: none;

        ul {
            list-style: none;
            display: flex;
            gap: 2.13rem;
            font-weight: 700;
            font-size: 0.8rem;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        @media screen and (min-width: 1280px) {
            display: block;
        }
    }
`;

const Header: React.FC<HeaderProps> = ({ headRef, modalHandler }) => {
    return (
        <StyledHeader ref={headRef}>
            <ContentWrapper flex={true}>
                <div className='logo-menu'>
                    <button onClick={modalHandler}>
                        <img src={navIcon} alt='navigation tab' />
                    </button>

                    <Link to='/'>
                        <img src={logo} alt='audiophile' />
                    </Link>
                </div>

                <nav className='nav-bar'>
                    <ul>
                        <li>home</li>
                        <li>headphones</li>
                        <li>speakers</li>
                        <li>earphones</li>
                    </ul>
                </nav>

                <button>
                    <img src={cartIcon} alt='cart' />
                </button>
            </ContentWrapper>
        </StyledHeader>
    );
};

export default Header;
