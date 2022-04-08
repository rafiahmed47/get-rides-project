import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData.json'
import Card from '../Card/Card';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(FakeData)
    }, [])
    return (
        <>
            <Navigation />
            <div className='flex justify-center items-center'>
                <h1>Choose Your Rides:</h1>
                {
                    vehicles.map(vehicle => <Card vehicle={vehicle} key={vehicle.id}></Card>)
                }
            </div>
        </>
    );
};

export default Home;