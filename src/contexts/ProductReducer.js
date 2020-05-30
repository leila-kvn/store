

const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'handelDetail': {
            const spro = state.products.find(item => item.id === action.value)
            // state.selectedProduct=spro
            return {...state,selectedProduct: spro }

        }
        default:
            return { ...state };
    }
}
export default ProductReducer;