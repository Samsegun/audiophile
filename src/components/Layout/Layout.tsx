import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import Backdrop from "../Utils/Backdrop";

const AppWrapper = styled.div`
    position: relative;
`;

const Layout: React.FC = () => {
    const { ref, inView } = useInView();
    const [modal, setModal] = useState(false);

    const handleModal = (a?: string) => {
        if (a === "backdrop") {
            setModal(false);
        } else {
            setModal(prev => !prev);
        }
    };

    const ModalTemplate = () => {
        if (modal) {
            return (
                <>
                    <Backdrop navInView={inView} handleModal={handleModal} />
                    <MobileMenu />
                </>
            );
        }
        return null;
    };

    return (
        <AppWrapper>
            <Header headRef={ref} modalHandler={handleModal} />
            <ModalTemplate />
            <Outlet />
            <Footer />
        </AppWrapper>
    );
};

export default Layout;
