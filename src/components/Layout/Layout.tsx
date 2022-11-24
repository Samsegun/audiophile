import { useInView } from "react-intersection-observer";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import Backdrop from "../Utils/Backdrop";
import { MobileNavContext } from "../../store/mobileNavContext";
import Cart from "../Cart/Cart";
import OrderConfirmation from "../OrderConfirmation";

const AppWrapper = styled.div`
    position: relative;
    .routes-wrapper {
        padding-top: 5.5rem;
    }
`;

const Layout: React.FC = () => {
    // const { ref, inView } = useInView();
    const ctx = useContext(MobileNavContext);

    const ModalTemplate = () => {
        if (ctx.isCart) {
            return (
                <>
                    {ctx.isCart && <Cart />}
                    {/* {ctx.isMobileNav && <MobileMenu />}
                    {ctx.isConfirmation && <OrderConfirmation />} */}

                    <Backdrop handleModal={ctx.handleModal} />
                </>
            );
        }

        if (ctx.isMobileNav) {
            return (
                <>
                    {/* {ctx.isCart && <Cart />} */}
                    {ctx.isMobileNav && <MobileMenu />}
                    {/* {ctx.isConfirmation && <OrderConfirmation />} */}

                    <Backdrop handleModal={ctx.handleModal} />
                </>
            );
        }

        if (ctx.isConfirmation) {
            return (
                <>
                    {/* {ctx.isCart && <Cart />} */}
                    {/* {ctx.isMobileNav && <MobileMenu />} */}
                    {ctx.isConfirmation && <OrderConfirmation />}

                    <Backdrop handleModal={ctx.handleModal} />
                </>
            );
        }

        return null;
    };

    return (
        <AppWrapper>
            <Header modalHandler={ctx.handleModal} />
            <ModalTemplate />
            <div className='routes-wrapper'>
                <Outlet />
            </div>
            <Footer />
        </AppWrapper>
    );
};

export default Layout;
