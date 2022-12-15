import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    // const { cart } = useContext(CartContext);

    if (!localStorage.getItem("cart")) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
};

export default PrivateRoutes;
