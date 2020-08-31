

const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'handelDetail': {
            const spro = state.products.find(item => item.id === action.value)
            return {...state,selectedProduct: spro }
        }
        case 'addToCart': {
            const tempProduct=state.products;
            const spro = tempProduct.find(item => item.id === action.value)
            spro.inCart=true;
            spro.count=1;
            spro.total=spro.price;
            return {products:tempProduct,cart:[...state.cart,spro]}
        }
        case 'openModal':{
            const spro = state.products.find(item => item.id === action.value)
            state.modalOpen=true;
            return {...state,modalProduct:spro}
        }
        case 'closeModal':{
            state.modalOpen=false;
            return {...state}
        }
        case 'decrement':{
            const spro = state.products.find(item => item.id === action.value)
            spro.count-=1
            return {...state}
        }
        case 'increment':{
            const spro = state.products.find(item => item.id === action.value)
            spro.count+=1
            return {...state}
        }
        case 'removeItem':{
            console.log("item removed")
            return {...state}
        }
        case 'clearCart':{
            console.log("clear cart")
            return {...state}
        }
        default:
            return { ...state };
    }
}
export default ProductReducer;