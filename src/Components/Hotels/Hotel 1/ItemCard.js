import styled from "styled-components";
import { useDispatch } from "react-redux";
import { aadToCart } from "../../../Redux/Slice/cartSlice";

const ItemCard = (props) => {
    const dispatch = useDispatch();

    const Add = (Element)=>{
        dispatch(aadToCart(Element))
    }

    return (
       
            <ITEMCARD className="card mb-3 col-md-5"  >
            <div className="row g-0" >
                <div className="col-md-4" data-bs-toggle="modal" data-bs-target={`#${props.modal_id}`}>
                    <img src={props.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body" data-bs-toggle="modal" data-bs-target={`#${props.modal_id}`}>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">This dish is one of the best dish of our restaurant</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div className="d-flex">
                    <span id="add-to-cart" onClick={()=>Add(props.Element)} className="btn btn-sm btn-outline-danger">Add to cart</span>
                    </div> 
                </div>
                <hr />
            </div>

            {/* <!-- Modal --> */}
            <div  className="modal fade" id={props.modal_id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div  className="modal-dialog ">
                    <div  className="modal-content">
                        <div  className="modal-header">
                            <h5  className="modal-title" id="staticBackdropLabel">{props.modal_title}</h5>
                            <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div  className="modal-body">
                            <div className="modal-image d-flex">
                                    <img src={props.img} alt=""/>
                            </div>
                        </div>
                        <div  className="modal-footer">
                            {/* <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" id="add-to-cart" className="btn btn-sm btn-outline-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </ITEMCARD>

        
    )
}

export default ItemCard;

const ITEMCARD = styled.div`
/* max-width: 540px; */
/* margin: 20px 0px 0px 20px; */
margin: 10px;

background-color: black;
/* border: solid lightgoldenrodyellow 1px; */

.col-md-8{
    height: 236px;
}

hr{
    margin: 0;
    padding: 0;
    color: gold;
}

.card-body{
    text-align: center;
    margin-top: 20px;
}

.card-text{
    color: #fff;
}
.text-muted{
    color: #fff;
}

#add-to-cart{
    border-radius: 20px;
    margin: 10px auto;
    
}

/* Modal */

.modal-dialog{
    display: flex;
    height: 100vh;
}

.modal-content{
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

.modal-header{
    border-bottom: none;
}
.modal-footer{
    border-top: none;
}

.modal-image img{
    width: 250px;
    margin: auto;
    border-radius: 50%;
}

img{
    border-radius: 20px;
    padding: 10px;
}
`