import { useContext } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../../styles/componentStyles/header";
import { ContentWrapper } from "../../styles/global-styles";
import cartIcon from "../../assets/cart-icon.png";
import navIcon from "../../assets/mobile-nav.png";
import logo from "../../assets/audiophile-logo.png";
import { CartContext } from "../../store/cartContext";

interface HeaderProps {
    modalHandler: (a: string) => void;
}

const Header: React.FC<HeaderProps> = ({ modalHandler }) => {
    const { cart, cartNotification, closeNotification } =
        useContext(CartContext);

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
                    className='cart-icon'
                    onClick={modalHandler.bind(null, "cart")}>
                    <img className='cart-icon' src={cartIcon} alt='cart' />

                    {cartNotification && <span>{cart.length}</span>}
                </button>
            </ContentWrapper>
        </StyledHeader>
    );
};

export default Header;
