import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const Cart = () => {
    const { cart, dispatch } = useCart();
    const navigate = useNavigate();

    const total = cart?.reduce((amount, item) => item.price + amount, 0);

    const removeFromCart = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    };

    return (
        <div className="checkout-page container">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {cart.length === 0 ? (
                        <p>Your basket is empty. <Link to="/">Go shopping</Link></p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="checkoutProduct">
                                <img className="checkoutProduct__image" src={item.image} alt="" />

                                <div className="checkoutProduct__info">
                                    <p className="checkoutProduct__title">{item.title}</p>
                                    <p className="checkoutProduct__price">
                                        <small>$</small>
                                        <strong>{item.price}</strong>
                                    </p>
                                    <div className="product__rating">
                                        {Array(5).fill().map((_, i) => (
                                            <Star key={i} size={16} fill={i < item.rating ? '#febd69' : 'none'} stroke={i < item.rating ? '#febd69' : '#ccc'} />
                                        ))}
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}>Remove from Basket</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="checkout__right">
                <div className="subtotal">
                    <p>Subtotal ({cart?.length} items): <strong>${total.toFixed(2)}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                    <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
