import { Link } from "react-router-dom";
import { StyledHeader } from "../../styles/componentStyles/header";
import { ContentWrapper } from "../../styles/global-styles";
import cartIcon from "../../assets/cart-icon.png";
import navIcon from "../../assets/mobile-nav.png";
import logo from "../../assets/audiophile-logo.png";

interface HeaderProps {
    modalHandler: () => void;
}

const Header: React.FC<HeaderProps> = ({ modalHandler }) => {
    return (
        <StyledHeader>
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
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/category/headphones'>headphones</Link>
                        </li>
                        <li>
                            <Link to='/category/speakers'>speakers</Link>
                        </li>
                        <li>
                            <Link to='/category/earphones'>earphones</Link>
                        </li>
                    </ul>
                </nav>

                <button
                    // ref={ref}
                    className='cart-icon'
                    onClick={modalHandler.bind(null, "cart")}>
                    <img className='cart-icon' src={cartIcon} alt='cart' />
                </button>
            </ContentWrapper>
        </StyledHeader>
    );
};

export default Header;
