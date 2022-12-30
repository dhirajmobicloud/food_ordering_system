import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../Redux/Slice/cartSlice";
import { ExclamationCircleFill } from 'react-bootstrap-icons'

const Hotel1Cart = () => {
    const cart_items = useSelector((state) => state.Cart)
    const dispatch = useDispatch();

    const Remove = (Element) => {
        dispatch(removeFromCart(Element))
    }

    return (
        <CART>
            <div className="container row g-3">
                <h2>Selected Items</h2>
                {
                    cart_items.length > 0 ? cart_items.map((element) => {

                        return <div className="card mb-3 col-md-5"  >
                            <div className="row g-0" >
                                <div className="col-md-4" data-bs-toggle="modal" data-bs-target={`#${element.idMeal}`}>
                                    <img src={element.strMealThumb} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body" data-bs-toggle="modal" data-bs-target={`#${element.idMeal}`}>
                                        <h5 className="card-title">{element.strMeal}</h5>
                                        <p className="card-text">Ek baar khaoge bar bar aaoge</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                    <div className="d-flex">
                                        <span id="remove-from-cart" onClick={() => Remove(element.idMeal)} className="btn btn-sm btn-outline-danger">Remove</span>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id={element.idMeal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">{element.strMeal}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="modal-image d-flex">
                                                <img src={element.strMealThumb} alt="" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            {/* <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                            <span id="remove-from-cart" onClick={() => Remove(element.idMeal)} className="btn btn-sm btn-outline-danger">Remove</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    })
                        : <span className="empty_cart"> <ExclamationCircleFill className="mx-2" />Your cart is empty please select some items</span>}
            </div>

            <div className="procede_pay d-flex">

                <span className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Proceede to pay
                </span>

            </div>

            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" >
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 style={{color:"#000"}}>Order Placed syccessfully</h3>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </CART>
    )
}

export default Hotel1Cart

const CART = styled.div`

/* overflow: scroll; */
/* height: 500px; */
margin: 50px;
/* ::-webkit-scrollbar{
    display: none;
 } */

 .container{
    display: flex;
    overflow: scroll;
    ::-webkit-scrollbar{
    display: none;
    }
    h2{
        text-align: center;
        color: #fff;
        font-weight: 800;
    }
 }

 span{
    margin: 10px auto;
    border-radius: 20px;
 }

 .card{
    margin: auto;
    background-color: black;

    .col-md-8{
    /* height: 180px; */
}

hr{
    margin: 0;
    padding: 0;
    color: gold;
}

.card-body{
    text-align: center;
    margin-top: 10px;
}

.card-text{
    color: #fff;
}
.text-muted{
    color: #fff;
}

 }

 .empty_cart{
    margin: auto;
    color: #fff;
 }

 .procede_pay{
    span{
        margin: 20px auto;
    }
 }

/* Modal  */

  .container .modal-dialog{
    display: flex;
    height: 100vh;
}

.container .modal-content{
    background: black;
    /* border: solid goldenrod .5px; */
    border: solid #292525  1px;
    border-radius: 20px;
    margin: auto;
}

.btn-close{
    color: #fff;
    background-color: burlywood;
    border-radius: 50%;
}

.container .modal-header{
    border-bottom: none;
}
.container .modal-footer{
    border-top: none;
}

.container .modal-image img{
    width: 300px;
    margin: auto;
    border-radius: 50%;
}

img{
    border-radius: 20px;
    padding: 10px;
}

`;