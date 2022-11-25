import React, { useReducer } from "react";

enum ActionKind {
    CART = "cart",
    MOBILENAV = "mobileNav",
    CONFIRMATION = "confirmation",
    BACKDROP = "backdrop",
}

interface ModalAction {
    type: ActionKind;
}

interface State {
    isCart: boolean;
    isMobileNav: boolean;
    isConfirmation: boolean;
}

interface ContextState {
    isCart: boolean;
    isMobileNav: boolean;
    isConfirmation: boolean;
    handleModal: (a: string) => void;
}

export const MobileNavContext = React.createContext<ContextState>({
    isCart: false,
    isMobileNav: false,
    isConfirmation: false,
    handleModal: () => {},
});

/* reducer code starts here*/
const initialState = {
    isCart: false,
    isMobileNav: false,
    isConfirmation: false,
};

const reducer = (state: State, action: ModalAction) => {
    const { type } = action;

    switch (type) {
        case ActionKind.CART:
            // an extra check to close mobile-menu or confirmation if open
            if (state.isMobileNav || state.isConfirmation)
                return {
                    isMobileNav: false,
                    isCart: false,
                    isConfirmation: false,
                };
            return {
                isCart: !state.isCart,
                isMobileNav: false,
                isConfirmation: false,
            };

        case ActionKind.MOBILENAV:
            // an extra check to close cart or confirmation if open
            if (state.isCart || state.isConfirmation)
                return {
                    isCart: false,
                    isMobileNav: false,
                    isConfirmation: false,
                };
            return {
                isMobileNav: !state.isMobileNav,
                isCart: false,
                isConfirmation: false,
            };

        case ActionKind.CONFIRMATION:
            // an extra check to close cart or mobile-nav if open
            if (state.isCart || state.isMobileNav)
                return {
                    isCart: false,
                    isMobileNav: false,
                    isConfirmation: false,
                };
            return {
                isConfirmation: !state.isConfirmation,
                isCart: false,
                isMobileNav: false,
            };

        case ActionKind.BACKDROP:
            return { isMobileNav: false, isCart: false, isConfirmation: false };

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

    const handleModal = (a: string) => {
        dispatchFn({ type: a });
    };

    const contextValue = {
        isCart: ctxState.isCart,
        isMobileNav: ctxState.isMobileNav,
        isConfirmation: ctxState.isConfirmation,
        handleModal: handleModal,
    };

    return (
        <MobileNavContext.Provider value={contextValue}>
            {children}
        </MobileNavContext.Provider>
    );
};

export default MobileNavContextProvider;
