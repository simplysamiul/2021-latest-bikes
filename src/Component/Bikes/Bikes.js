import React from 'react';
import './Bikes.css';

const Bikes = (props) => {
    const {model_name, company_name, bike_img, bike_price, discount, rating} = props.bike;
    return (
        <div className="bike-card">
            <img src={bike_img} alt="" />
            <div className="card-text">
            <h4>{model_name}</h4>
            <h5>Company : {company_name}</h5>
            <h5>Price : <span className="tk-symbol">&#2547;</span> {bike_price}</h5>
            <p>Discount : {discount}</p>
            </div>
        </div>
    );
};

export default Bikes;