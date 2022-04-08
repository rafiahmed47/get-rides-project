import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import map from '../../Assets/Map.png'

const Searched = () => {
    return (
        <>
            <Navigation />
            <div className='flex justify-between mt-9'>
                <h1 className='text-red-600 m-9 '>No rides available in your region</h1>
                <div className=''>
                    <img src={map} alt="" />
                </div>
            </div>
        </>
    );
};

export default Searched;