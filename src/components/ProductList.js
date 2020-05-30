import React, { useContext } from 'react';
import Title from './Title'
import Product from './Product'
import DemoContext from '../contexts/ProductContext'
// import { storeProducts } from '../data'

// const initialValue = {
//     products: storeProducts,
// }

const ProductList=props=> {
    const context=useContext(DemoContext)
    
    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products"></Title>
                    <div className="row ">
                        {/* {productsContext.products[1].company} */}
                        {context.products.map(product => {
                            return (
                                <Product key={product.id} product={product}></Product>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;