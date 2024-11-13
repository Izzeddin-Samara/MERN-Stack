import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/products" element={<AllProducts />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/" element={<AddProduct />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
