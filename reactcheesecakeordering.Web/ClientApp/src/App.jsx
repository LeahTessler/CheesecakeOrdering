import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Order from './Pages/Order';
import ViewOrders from './Pages/ViewOrders'
import OrderDetails from './Pages/OrderDetails'
import SuccessMessage from './Pages/SuccessMessage'
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/orderdetails/:id' element={<OrderDetails />} />
                <Route path='/successMessage' element={<SuccessMessage />} />

            </Routes>
        </Layout>
    );
}

export default App;