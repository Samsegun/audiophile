import { motion } from "framer-motion";
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}>
            <Hero />

            <Main />
        </motion.div>
    );
};

export default Home;
