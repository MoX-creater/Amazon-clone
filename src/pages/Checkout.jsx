import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [address, setAddress] = useState('');
    const [payment, setPayment] = useState('');

    const total = cart?.reduce((amount, item) => item.price + amount, 0);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
        navigate('/');
        // Here we would clear cart
    };

    if (cart.length === 0) {
        return <div className="container"><h2>Your Cart is empty</h2></div>;
    }

    return (
        <div className="checkout-page container">
            <div className="checkout__left">
                <h2>Review Your Order</h2>
                <div style={{ margin: '20px 0', border: '1px solid #ddd', padding: '20px' }}>
                    <h3>Shipping Address</h3>
                    <p>{user?.email}</p>
                    <form onSubmit={handlePlaceOrder}>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                style={{ width: '100%', height: '80px' }}
                            ></textarea>
                        </div>
                        <h3>Payment Method</h3>
                        <div className="form-group">
                            <label>Card Details (Mock)</label>
                            <input value="4242 4242 4242 4242" disabled />
                        </div>

                        <h3>Order Summary</h3>
                        <p>Items: {cart.length}</p>
                        <p>Total: ${total.toFixed(2)}</p>

                        <button className="auth-btn" type="submit">Place Order</button>
                    </form>
                </div>
            </div>

            <div className="checkout__right">
                <div className="subtotal">
                    <p>Order Total: <strong>${total.toFixed(2)}</strong></p>
                    <button onClick={handlePlaceOrder}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
