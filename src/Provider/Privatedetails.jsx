/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Privatedetails = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const loaction=useLocation();
    console.log(loaction);

if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
}
if (user) {
    return children;
}

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Privatedetails;