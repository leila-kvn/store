import React from 'react'
import CartItem from './CartItem'

export default function CartList(props) {
    return (
        <div className="container-fluid">
            {props.cart.map(item=>{
                return <CartItem key={item.id} item={item}></CartItem>
            }
                )}            
            
        </div>
    )
}
