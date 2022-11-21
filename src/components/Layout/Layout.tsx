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

const AppWrapper = styled.div`
    position: relative;
    .routes-wrapper {
        padding-top: 5.5rem;
    }
`;

const Layout: React.FC = () => {
    const { ref, inView } = useInView();
    const ctx = useContext(MobileNavContext);

    const ModalTemplate = () => {
        if (ctx.isCart || ctx.isMobileNav) {
            return (
                <>
                    {ctx.isCart && <Cart />}
                    {ctx.isMobileNav && <MobileMenu />}

                    <Backdrop
                        navInView={inView}
                        handleModal={ctx.handleModal}
                    />
                </>
            );
        }
        return null;
    };

    return (
        <AppWrapper>
            <Header headRef={ref} modalHandler={ctx.handleModal} />
            <ModalTemplate />
            <div className='routes-wrapper'>
                <Outlet />
            </div>
            <Footer />
        </AppWrapper>
    );
};

export default Layout;
