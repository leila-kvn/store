import React, { useContext } from 'react';
import Title from '../Title'
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import productContext from '../../contexts/ProductContext'
import CartList from './CartList'
import CartTotal from './CartTotal'

const Cart = props => {
    const DemoContext = useContext(productContext)
    if (DemoContext.cart.length > 0) {
        return (
            <>
                <Title name="your" title="cart"> </Title>
                <CartColumn></CartColumn>
                <CartList cart={DemoContext.cart}></CartList>
                <CartTotal cartTotal={DemoContext.cartTotal} clearCart={()=>DemoContext.clearCart}></CartTotal>
            </>
        )
    }
    else{
        return(
    <EmptyCart></EmptyCart>
    )
    }
}

export default Cart;