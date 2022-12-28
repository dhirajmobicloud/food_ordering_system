import styled from "styled-components";

const ItemCard = (props) => {


    return (

        <ITEMCARD class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={props.img} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">Ek baar khaoge bar bar aaoge</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </ITEMCARD>
    )
}

export default ItemCard;

const ITEMCARD = styled.div`
max-width: 540px;
margin: 20px 0px 0px 50px;

.card-body{
    text-align: center;
    margin-top: 20px;
}

img{
    border-radius: 20px;
    padding: 10px;
}
`