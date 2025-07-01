import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

const ViewOrders = () => {

    const [orders,setOrders]=useState([])

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/api/orders/getall');
            setOrders(data);
        }

        getOrders();

    }, []);

    return (
        <div className="d-flex justify-content-center">
            <table className="table text-center shadow-lg" style={{ borderCollapse: "separate", borderSpacing: "0 15px", maxWidth: "80%" }}>
                <thead>
                    <tr style={{ backgroundColor: "#212529", color: "white", borderRadius: "15px" }}>
                        <th>Name/Email</th>
                        <th>Base Flavor</th>
                        <th>Toppings</th>
                        <th>Special Requests</th>
                        <th>Quantity</th>
                        <th>Delivery Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(o => (
                        <tr key={o.id} style={{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}>
                            <td style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                                <a href={`/orderDetails/${o.id}`}>
                                    {o.name}
                                       -
                                    {o.email}
                                </a>
                            </td>
                            <td>{o.baseFlavor}</td>
                            <td>{o.toppings || 'None'}</td>
                            <td>{o.specialRequests || 'None'}</td>
                            <td>{o.quantity}</td>
                            <td>{dayjs(o.deliveryDate).format('MM/DD/YYYY')}</td>
                            <td>{`$${o.total.toFixed(2)}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

    
};

export default ViewOrders;
