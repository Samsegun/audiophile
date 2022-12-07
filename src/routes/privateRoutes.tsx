import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CartContext } from "../store/cartContext";

const PrivateRoutes = () => {
    const { cart } = useContext(CartContext);

    if (!cart.length) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
};

export default PrivateRoutes;
