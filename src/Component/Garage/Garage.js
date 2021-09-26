import React, { useEffect, useState } from 'react';
import Bikes from '../Bikes/Bikes';
import './Garage.css';

const Garage = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
        fetch('bikes-data.JSON')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    return (
        <div className="garage-area">
            <div className="selected-bikes">
                <h3>Selected Bikes : 0</h3>
                <h3>bike Price : </h3>
            </div>
            <div className="bikes-container">
            <div className="bikes-list">
                {
                    bikes.map(bike => <Bikes bike={bike} key={bike.id} />)
                }
            </div>
            </div>
        </div>
    );
};

export default Garage;