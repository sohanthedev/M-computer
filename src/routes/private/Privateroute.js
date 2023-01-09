import React, { useContext } from 'react';
import { Usercontext } from '../../components/Authprovider/Authprovider';
import { Navigate, useLocation} from "react-router-dom";
import Spinner from '../../Shared/Spinner';

const Privateroute = ({children}) => {

    const { user, loader } = useContext(Usercontext)
    const location = useLocation();
    if (loader) {
        return <Spinner></Spinner>
    }


    if (user) {
        return children;
    } else {
        return <Navigate to='/signup' state={{from:location}} replace></Navigate>
    }
};

export default Privateroute;