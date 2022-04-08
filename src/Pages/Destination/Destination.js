import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../../FakeData.json'
import Navigation from '../Navigation/Navigation';
import map from '../../Assets/Map.png'

const Destination = () => {
    let { vehicles } = useParams()
    // const filteredData = FakeData.filter((data) => data.name.toLocaleLowerCase().includes(vehicles.toLocaleLowerCase()));

    const data = FakeData.find(vehicle => vehicle.name === vehicles)

    const { name } = data;

    return (
        <>
            <Navigation />
            <div className='flex justify-between mt-9'>
                <div className='h-20 rounded-sm border-solid border-black'>
                    <h5>Pick From</h5>
                    <input  value='Mirpur'/>
                    <h4>Pick To</h4>
                    <input value='Dhanmondi'/>
                    <Link to='/searched' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>search</Link>
                </div>
                <div className=''>
                    <img src={map} alt="" />
                </div>
            </div>
        </>

    );
};

export default Destination;