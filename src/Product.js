import React from 'react';
import "./Product.css"
import { useStateValue } from "./StateProvider"

function Product({id, title, image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        console.log('i was hit')
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
            
        })

    }


    let test =  rating > 5 ? 1 : rating
    return (
        
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                   
                    Array(test) 
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
