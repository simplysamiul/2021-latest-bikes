import React, { useEffect, useState } from 'react';
import Bikes from '../Bikes/Bikes';
import './Garage.css';

const Garage = () => {
    const [bikes, setBikes] = useState([]);
    const [selectedBike, setSeletedBike] = useState([]);
    useEffect(()=>{
        fetch('bikes-data.JSON')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[]);
    const addedSelectedBikes = eachBike =>{
        const bike = [...selectedBike, eachBike];
        setSeletedBike(bike);
    };
    let bikePrice  = 0;
    for(const bike of selectedBike){
        bikePrice = bikePrice + bike.bike_price;
    }
    return (
        <div className="garage-area">
            <div className="selected-bikes">
                <h3>Selected Bikes : {selectedBike.length}</h3>
                <h3>bike Price : {bikePrice}</h3>
            </div>
            <div className="bikes-container">
            <div className="bikes-list">
                {
                    bikes.map(bike => <Bikes 
                    bike={bike} key={bike.id} 
                    addedSelectedBikes = {addedSelectedBikes}
                    />)
                }
            </div>
            </div>
        </div>
    );
};

export default Garage;