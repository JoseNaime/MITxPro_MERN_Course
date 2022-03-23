import React, {useState, useEffect} from 'react';
import {api} from '../api.js'

function TestComponent() {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const newProducts = await api.getAllProducts()
        console.log(newProducts)
        setProducts(newProducts)
    }, [])

    const productsElements = products.map(product => {
        return (
            <div>
                <h1>{product.attributes.Name}</h1>
                <p>{product.attributes.InStock}</p>
            </div>
        )
    })

    return (
        <>
            <p>This is a component</p>
            {(products.length > 0) ?
                productsElements
                : ""
            }

        </>
    );
}

export default TestComponent;