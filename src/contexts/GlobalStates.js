
import React, { useReducer, useContext } from 'react';
import { storeProducts, detailProduct } from '../data'
import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'

const initialValue = {
    products: storeProducts,
    selectedProduct: detailProduct
}

const GlobalStates = props => {
    const [state, dispatch] = useReducer(ProductReducer, initialValue)
    const { mproducts } = state.products

    const handelDetail = id => {
        dispatch({ type: "handelDetail", value: id })
    }
    
    return (
        <>
            <ProductContext.Provider value={{
                products: state.products,
                selectedProduct: state.selectedProduct,
                handelDetails: handelDetail
            }}>
                {props.children}
            </ProductContext.Provider>
        </>
    )
}
export default GlobalStates;