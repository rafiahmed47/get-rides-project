import React from 'react';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Navigation/Navigation';

const Login = () => {
    const {signInWithGoogle} = useAuth()
    const handleSignIn = () =>{
        signInWithGoogle()
    }
    return (
        <>
            <Navigation/>
            <button type="button" onClick={handleSignIn} class=" px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Sign In With Google</button>
        </>
    );
};

export default Login;