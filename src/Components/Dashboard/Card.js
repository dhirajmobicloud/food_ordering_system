import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Cart = (props) =>{

    const Navigate = useNavigate();

    return(
        <CART className="col-md-3 my-3" onClick={()=> Navigate(`/${props.hotel_id}`)}>
        <div className="card shadow   bg-body-tertiary rounded" >
            <img src="https://b.zmtcdn.com/data/pictures/5/19551315/8c931c81ff412c4fa04209c60c42a6f6_o2_featured_v2.jpg?output-format=webp" className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{props.hotel_name}</p>
            </div>
        </div>
    </CART>
    )
}

export default Cart;

const CART = styled.div`

.card{
    width: 14rem;
    margin:auto
    
}

.card:hover{
    transform: scale(1.1);
    transition: .5s;
}
`;