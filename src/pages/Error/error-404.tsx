import { motion } from "framer-motion";
import styled from "styled-components";

const ErrorPage = styled.div`
    min-height: 100vh;
    max-width: 1280px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    color: #cd2c2c;
    text-transform: capitalize;
`;

const NotFound = () => {
    return (
        <ErrorPage>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}>
                There's nothing here: 404!
            </motion.p>
        </ErrorPage>
    );
};

export default NotFound;
