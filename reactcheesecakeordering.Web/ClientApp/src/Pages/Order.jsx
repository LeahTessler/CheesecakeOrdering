import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LivePreview from '../components/LivePreview'

const baseFlavors = ['Choose...', 'Classic', 'Chocolate', 'Red Velvet', 'Brownie']
const toppings =
    [
        'Chocolate Chips', 'Caramel Drizzle', 'Whipped Cream', 'Pecans', 'Almonds', 'Toasted Coconut',
        'Graham Cracker Crumble', 'Cookie Dough', 'Mint Chocolate Chips', 'Caramelized Bananas',
        'Rainbow Sprinkles', 'Powdered Sugar', 'White Chocolate Shavings', 'Peanut Butter Drizzle',
        'Dark Chocolate Drizzle']

const Order = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [baseFlavor, setBaseFlavor] = useState(baseFlavors[0]);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [specialRequests, setSpecialRequests] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [deliveryDate, setDeliveryDate] = useState('');
    const [isSubmitting, setIsSumbitting] = useState(false);

    const navigate = useNavigate();

    const onToppingsChange = t => {
        if (selectedToppings.includes(t)) {
            setSelectedToppings(selectedToppings.filter(topping => topping !== t));
        }
        else {
            setSelectedToppings([...selectedToppings, t]);
        }
    }

    const getTotal = () => {
        if (baseFlavor === baseFlavors[0])
            return 0;

        return (49.99+(selectedToppings.length*3.95)*quantity)

    }

    const formIsValid = !!name && !!email && baseFlavor !== baseFlavors[0] && quantity>0 && !!deliveryDate


    const onSubmitClick = async () => {
        setIsSumbitting(true)
        await axios.post('/api/orders/addOrder', {name,email, baseFlavor, toppings: selectedToppings.join(','), deliveryDate, quantity, specialRequests, total: getTotal() })
        navigate('/successMessage')

    }



    return (
        <div className="container" style={{ marginTop: 80 }}>
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3"><label className="form-label">
                        Cheesecake Base Flavor ($49.99)</label>
                        <select onChange={e => setBaseFlavor(e.target.value)} value={baseFlavor} className="form-select">
                            {baseFlavors.map((bF) =>
                                <option key={bF}>{bF}</option>
                            )}
                        </select>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Toppings (each topping adds an additional $3.95)
                        </label>
                        {toppings.map(t => {
                            return <div key={t} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={selectedToppings.includes(t)}
                                    onChange={() => onToppingsChange(t)}
                                />
                                <label className="form-check-label">{t}</label>
                            </div>
                        })}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea className="form-control" rows="3"
                            onChange={e => setSpecialRequests(e.target.value)} value={specialRequests} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" min={1}
                            value={quantity} onChange={e => setQuantity(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input type="date" className="form-control"
                            value={deliveryDate} onChange={e => setDeliveryDate(e.target.value)} />
                    </div>
                    <button type="submit" disabled={!formIsValid|| isSubmitting} onClick={onSubmitClick} className="btn btn-primary">Submit Order</button>

                </div>
                <div className="col-md-6 position-sticky" style={{ top: 2 + 'rem' }}>
                    <h2 className="mb-4">Live Preview</h2>
                    <LivePreview baseFlavor={baseFlavor}
                        selectedToppings={selectedToppings}
                        deliveryDate={deliveryDate}
                        quantity={quantity}
                        requests={specialRequests}
                        total={getTotal()} />
                </div>
            </div>
        </div>

    );
}

export default Order;
