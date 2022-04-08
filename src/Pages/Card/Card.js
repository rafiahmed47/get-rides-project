import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ vehicle }) => {
    const { img, name } = vehicle;
    return (
        <Link to={`/destination/${name}`} className="box-border h-62 w-52 p-8 mx-5 mt-16 border-4">
            <img src={img} alt="" />
            <div className="text-center">{name}</div>
        </Link>
    );
};

export default Card;