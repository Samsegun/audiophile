import { useContext, useEffect } from "react";
import { MobileNavContext } from "../../store/mobileNavContext";
import Hero from "./Hero";
import Main from "./Main";

const Home = () => {
    const { handleModal } = useContext(MobileNavContext);

    useEffect(() => {
        handleModal.call(null, "backdrop");
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div>
            <Hero />

            <Main />
        </div>
    );
};

export default Home;
