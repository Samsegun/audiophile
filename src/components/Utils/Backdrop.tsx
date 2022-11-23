import styled from "styled-components";

/*
    backdrop extends to the top if navigation is 
    not in view
*/

const OverlayStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    min-height: 100vh;
    z-index: 3;
    transition: all 300ms ease-in-out;
`;

const Backdrop: React.FC<{
    handleModal: (a: string) => void;
}> = ({ handleModal }) => {
    return (
        <OverlayStyle
            onClick={handleModal.bind(null, "backdrop")}></OverlayStyle>
    );
};

export default Backdrop;
