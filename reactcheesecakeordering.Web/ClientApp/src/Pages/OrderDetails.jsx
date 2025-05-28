import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

const OrderDetails = () => {
    const { id } = useParams();

    const [order, setOrder] = useState();

    useEffect(() => {
        const getOrder = async () => {
            const { data } = await axios.get(`/api/orders/getOrder?id=${id}`);
            setOrder(data);
        }

        getOrder();
        console.log(order)
    }, []);

    if (!order) {
        return <h1>Loading....</h1>
    }


    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
            <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: "30rem", backgroundColor: "#f8f9fa" }}>
                <div className="card-body">
                    <h3 className="card-title fw-bold">{order.name}</h3>
                    <p className="card-text fs-5">{order.email}</p>
                    <p className="card-text fs-5">{order.baseFlavor}</p>
                    <p className="card-text fs-5">{order.selectedToppings || 'None'}</p>
                    <p className="card-text fs-5">{order.specialRequests || 'None'}</p>
                    <p className="card-text fs-5">{order.quantity}</p>
                    <p className="card-text fs-5">{dayjs(order.deliveryDate).format('MM/DD/YYYY')}</p>
                    <p className="card-text fs-5">{`$${order.total.toFixed(2)}`}</p>
                </div>
                <Link to='/viewOrders'>
                    <button className='btn btn-primary w-100'>Back to Orders</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderDetails;
