import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth()
    console.log(user)
    // const handleLogout = () =>{
    //     logOut
    // }   
    const { vehicles } = useParams()
    return (
        <nav className='flex justify-between'>
            <div>
                <Link to='/'>Ride SOoth</Link>
            </div>
            <ul className='flex'>
                <li className='mt-0 ml-5 my-4 px-2'><a href="/">Home</a></li>
                <li className='mt-0 ml-5 my-4 px-2'><a href={`/destination/${vehicles || 'Car'}`}>Destination</a></li>
                <li className='mt-0 ml-5 my-4 px-2'><a href="/Blog">Blog</a></li>
                <li className='mt-0 ml-5 my-4 px-2'><a href="/contact">Contact</a></li>
                {
                    user?.uid ? 
                    <button className='mt-0 ml-5 my-4 px-2 bg-amber-600 rounded' onClick={logout}>{user.displayName}</button>
                    : 
                    <li className='mt-0 ml-5 my-4 px-2 bg-amber-600 rounded'><a href="/login">Login</a></li>
                }
                

            </ul>

        </nav>

        // <div className="Navigation">
        //     <nav>
        //         <a href="/home">Home</a>
        //         <a href="/destination">Destination</a>
        //         <a href="/blog">Blog</a>
        //         <a href="/contact">Contact</a>
        //         <a href="/login" id="btn">Login</a>
        //     </nav>
        // </div>
    );
};

export default Navigation;