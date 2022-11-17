import { StyledHeader } from "../../styles/componentStyles/header";
import { Link } from "react-router-dom";
import { ContentWrapper } from "../../styles/global-styles";
import cartIcon from "../../assets/cart-icon.png";
import navIcon from "../../assets/mobile-nav.png";
import logo from "../../assets/audiophile-logo.png";

interface HeaderProps {
    headRef: () => void;
    modalHandler: () => void;
}

const Header: React.FC<HeaderProps> = ({ headRef, modalHandler }) => {
    return (
        <StyledHeader ref={headRef}>
            <ContentWrapper flex={true}>
                <div className='logo-menu'>
                    <button onClick={modalHandler.bind(null, "mobileNav")}>
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

                <button onClick={modalHandler.bind(null, "cart")}>
                    <img src={cartIcon} alt='cart' />
                </button>
            </ContentWrapper>
        </StyledHeader>
    );
};

export default Header;
