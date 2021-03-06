import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import productContext from '../contexts/ProductContext'

const Product=props=> {
    const { id, title, img, price, inCart } = props.product
    const DemoContext=useContext(productContext)
    return (
        <>
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5"
                        onClick={()=>DemoContext.handelDetails(id) }>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"></img>
                        </Link>
                        <button className="card-btn" disabled={inCart ? true : false}
                            onClick={
                                () =>{ DemoContext.addToCart(id);
                                    DemoContext.openModal(id);}
                                }>
                            {inCart ?
                                <p className="text-capitalize mb-0" disabled>in cart</p> :
                                <i className="fa fa-cart-plus"></i>}
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <p className="align-self-center flex-grow-1 mb-0">{title}</p>
                        <h5 className="font-italic text-blue mb-0">
                            <span className="mb-0 mr-1">$</span>
                            {price}
                        </h5>

                    </div>
                </div>
            </ProductWrapper>
        </>
    )
}
export default Product;
const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    border-top:transparent;
    background:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0 rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
    .img-container .card-img-top{
        transform:scale(1.2)
    }
    .img-container .card-btn{
        transform:translate(0,0);
    }
    
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.card-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background: var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
    transition:all 1s linear;
}
.card-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`
