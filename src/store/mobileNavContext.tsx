import React, { useReducer, useState } from "react";

enum ActionKind {
    CART = "cart",
    MOBILENAV = "mobileNav",
    BACKDROP = "backdrop",
}

interface ModalAction {
    type: ActionKind;
}

interface State {
    isCart: boolean;
    isMobileNav: boolean;
}

export const MobileNavContext = React.createContext({
    isCart: false,
    isMobileNav: false,
    handleModal: () => {},
});

/* reducer code starts here*/
const initialState = { isCart: false, isMobileNav: false };

const reducer = (state: State, action: ModalAction) => {
    const { type } = action;

    switch (type) {
        case ActionKind.CART:
            // an extra check to close mobile menu if open
            if (state.isMobileNav) return { isMobileNav: false, isCart: false };
            return { isCart: !state.isCart, isMobileNav: false };

        case ActionKind.MOBILENAV:
            // an extra check to close cart if open
            if (state.isCart) return { isCart: false, isMobileNav: false };
            return { isMobileNav: !state.isMobileNav, isCart: false };

        case ActionKind.BACKDROP:
            return { isMobileNav: false, isCart: false };

        default:
            break;
    }
};
/* reducer code ends here*/

const MobileNavContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [ctxState, dispatchFn] = useReducer<React.Reducer<any, any>>(
        reducer,
        initialState
    );

    const handleModal = (a?: string) => {
        dispatchFn({ type: a });
    };

    const contextValue = {
        isCart: ctxState.isCart,
        isMobileNav: ctxState.isMobileNav,
        handleModal: handleModal,
    };

    return (
        <MobileNavContext.Provider value={contextValue}>
            {children}
        </MobileNavContext.Provider>
    );
};

export default MobileNavContextProvider;
