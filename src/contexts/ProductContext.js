import React from 'react'


const ProductContext= React.createContext({
    products:[],
    selectedProduct:[],
    modalProduct:[],
    modalOpen:false,
    handelDetails:()=>{},
    addToCart:()=>{},
    cart:[],
    openModal:()=>{},
    closeModal:()=>{},
    cartSubTotal:0,
    CartTax:0,
    CartTotal:0,
    increment:()=>{},
    decrement:()=>{},
    removeItem:()=>{},
    clearCart:()=>{},
        // productDispatch:()=>{}
})
export default ProductContext