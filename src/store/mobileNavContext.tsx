import React, { useState } from "react";

export const MobileNavContext = React.createContext({
    modal: false,
    handleModal: () => {},
});

const MobileNavContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [modal, setModal] = useState(false);

    const handleModal = (a?: string) => {
        if (a === "backdrop") {
            setModal(false);
        } else {
            setModal(prev => !prev);
        }
    };

    const contextValue = {
        modal: modal,
        handleModal: handleModal,
    };

    return (
        <MobileNavContext.Provider value={contextValue}>
            {children}
        </MobileNavContext.Provider>
    );
};

export default MobileNavContextProvider;
