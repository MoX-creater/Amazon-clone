import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/data';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const { dispatch } = useCart();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return <div className="container"><h2>Product not found</h2></div>;
    }

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: product,
        });
    };

    return (
        <div className="product-details container">
            <div className="product-details__left">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details__center">
                <h1>{product.title}</h1>
                <div className="product__rating">
                    {Array(5).fill().map((_, i) => (
                        <Star key={i} size={18} fill={i < product.rating ? '#febd69' : 'none'} stroke={i < product.rating ? '#febd69' : '#ccc'} />
                    ))}
                </div>
                <p>Price: <strong>${product.price}</strong></p>
                <p>Description: This is a great product. Features high quality materials and excellent performance.</p>
            </div>
            <div className="product-details__right">
                <div className="checkout-card">
                    <p>Price: <strong>${product.price}</strong></p>
                    <p>Status: In Stock</p>
                    <button onClick={addToCart}>Add to Cart</button>
                    <button className="buy-now">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
