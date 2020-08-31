
import React, { useReducer } from 'react';
import { storeProducts, detailProduct } from '../data'
import ProductContext from './ProductContext'
import ProductReducer from './ProductReducer'

const initialValue = {
    products: storeProducts,
    selectedProduct: detailProduct,
    cart:storeProducts,
    modalOpen:false,
    modalProduct:detailProduct
}

const GlobalStates = props => {
    const [state, dispatch] = useReducer(ProductReducer, initialValue)

    const handelDetail = id => {
        dispatch({ type: "handelDetail", value: id })
    }
    const addToCart = id => {
        dispatch({ type: "addToCart", value: id })
    }  
    const openModal = id => {
        dispatch({ type: "openModal", value: id })
    }
    const closeModal = id => {
        dispatch({ type: "closeModal", value: id })
    } 
    const increment = id => {
        dispatch({ type: "increment", value: id })
    }    
    const decrement = id => {
        dispatch({ type: "decrement", value: id })
    }   
    const removeItem = id => {
        dispatch({ type: "removeItem", value: id })
    }   
    const clearCart =() => {
        dispatch({ type: "clearCart" })
    }   
    return (
        <>
{/*         {console.log(state.products)}
 */}            <ProductContext.Provider value={{
                ...state,
                handelDetails: handelDetail,
                addToCart:addToCart,
                openModal:openModal,
                closeModal:closeModal,
                increment:increment,
                decrement:decrement,
                removeItem:removeItem,
                clearCart:clearCart,
            }}>
                {props.children}
            </ProductContext.Provider>
        </>
    )
}
export default GlobalStates;