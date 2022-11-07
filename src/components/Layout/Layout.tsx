import { useInView } from "react-intersection-observer";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import Backdrop from "../Utils/Backdrop";
import { MobileNavContext } from "../../store/mobileNavContext";

const AppWrapper = styled.div`
    position: relative;
`;

const Layout: React.FC = () => {
    const { ref, inView } = useInView();
    const ctx = useContext(MobileNavContext);

    const ModalTemplate = () => {
        if (ctx.modal) {
            return (
                <>
                    <Backdrop
                        navInView={inView}
                        handleModal={ctx.handleModal}
                    />
                    <MobileMenu />
                </>
            );
        }
        return null;
    };

    return (
        <AppWrapper>
            <Header headRef={ref} modalHandler={ctx.handleModal} />
            <ModalTemplate />
            <Outlet />
            <Footer />
        </AppWrapper>
    );
};

export default Layout;
