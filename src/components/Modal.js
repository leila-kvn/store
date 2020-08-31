import React, { useContext } from 'react'
import productContext from '../contexts/ProductContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default function Modal() {
    const DemoContext = useContext(productContext)
    const { title, img, price} = DemoContext.modalProduct
    if (!DemoContext.modalOpen) {
        return null;
    }
    else {
        return (
            <ModalContainer>
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-8 mx-auto col-lg-4 col-md-6 text-center text-capitalize">
                            <h5>item added to the cart</h5>
                            <img src={img} className="img-fluid" alt={title} ></img>
                            <h5>{title}</h5>
                            <h5 className="text-muted">price: $ {price}</h5>
                            <Link to='/'>
                                <ButtonContainer onClick={()=>DemoContext.closeModal()}>
                                    continue shopping
                                </ButtonContainer>
                            </Link>
                            <Link to='/cart'>
                                <ButtonContainer cart onClick={()=>DemoContext.closeModal()}>
                                    got to cart
                                </ButtonContainer>
                            </Link>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        )
    }
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: var(--mainWhite)
}
`;