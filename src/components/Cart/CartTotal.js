import React from 'react'
import {Link} from 'react-router-dom'


export default function cartTotal(props) {
    console.log(props.cartTotal)
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button type="button" className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        onClick={props.clearCart}
                        >
                            clear cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
