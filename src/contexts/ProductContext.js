import React from 'react'
import { storeProducts,detailProduct } from '../data'


const ProductContext= React.createContext({
    products:[],
    selectedProduct:[],
    handelDetails:()=>{}
    // productDispatch:()=>{}
})
export default ProductContext