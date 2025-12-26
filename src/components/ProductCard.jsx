import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, title, image, price, rating }) => {
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">
                    <Link to={`/product/${id}`}>{title}</Link>
                </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(5)
                        .fill()
                        .map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                fill={i < rating ? '#febd69' : 'none'}
                                stroke={i < rating ? '#febd69' : '#ccc'}
                            />
                        ))}
                </div>
            </div>

            <img src={image} alt={title} />

            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
