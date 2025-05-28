import React from 'react';
import dayjs from "dayjs";



const LivePreview = ({ baseFlavor, selectedToppings, deliveryDate, quantity, requests, total }) => {


    return (
    
        <div className="card" style={{ width: 18 + 'rem' }}>
            <img src="https://lh3.googleusercontent.com/p/AF1QipMuIdNvCgQ_xVr7jv8jqlLMwxJA0I2Gr4kUw4nC=w138-h138-n-k-no" className="card-img-top" alt="Cheesecake" />
            <div className="card-body">
                <h5 className="card-title">Your Custom Cheesecake</h5>
                <p className="card-text">Base: {baseFlavor }</p>
                <p className="card-text">Toppings: { selectedToppings.join(',')}
                </p>
                <p className="card-text">Special Requests: { requests} </p>
                <p className="card-text">Quantity: { quantity}</p>
                <p className="card-text">Delivery Date: {dayjs(deliveryDate).format("MM/DD/YYYY")|| ''}</p>
                <p className="card-text fw-bold">Total:$ {total.toFixed(2)}</p>
            </div>
    </div>
        )
   
}
export default LivePreview;
