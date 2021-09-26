import React from 'react';
import Rating from 'react-rating';
import './Bikes.css';

const Bikes = (props) => {
    // console.log(props);
    const {model_name, company_name, bike_img, bike_price, discount, rating} = props.bike;
    return (
        <div className="bike-card">
            <img src={bike_img} alt="" />
            <div className="card-text">
            <h3>{model_name}</h3>
            <h5>Company : {company_name}</h5>
            <h5>Price : <span className="tk-symbol">&#2547;</span> {bike_price} /-</h5>
            <p>Discount : {discount}</p>
           <div className="bike-rating">
           <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
                initialRating={rating}
            />
           </div>
            <div className="buy-button">
            <button onClick={()=>props.addedSelectedBikes(props.bike)}> <span className="buy-icon"><i className="fas fa-shopping-cart"></i></span> buy</button>
            </div>
            </div>
        </div>
    );
};

export default Bikes;