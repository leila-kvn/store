import React, { useContext } from 'react'
import ProductContext from '../../contexts/ProductContext'

export default function CartItem(props) {
    const { id, title, img, price, count, total } = props.item
    const demoContext = useContext(ProductContext)
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: "5rem", height: "5rem" }} alt={title} className="img-fluid" ></img>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-8">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => demoContext.decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => demoContext.increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-8">
                <div className="cart-icon" onClick={()=>demoContext.removeItem(id)}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: $ {total}</strong>
            </div>
        </div>
    )
}
