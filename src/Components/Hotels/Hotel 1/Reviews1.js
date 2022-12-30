import styled from "styled-components";

const Reviews1 = () => {

    return (
        <REVIEWS className="container my-4">
            <h4>Amritsari Reviews</h4>
            <hr />
            <div class="card  my-4">
                <div className="d-flex">
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="" />
                    <h5>Atul Shinde</h5>
                </div>
                <div class="card-body">

                    <p class="card-text">It was cold and very small size as per price..</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            <div class="card  my-4">
                <div className="d-flex">
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="" />
                    <h5>Dhiraj Mahadik</h5>
                </div>
                <div class="card-body">

                    <p class="card-text">Ordered Punjabi Thali, the meal was quite decent. All the dishes were nice except the aloo sabji, the gravy was too watery for my liking..</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            <div class="card  my-4">
                <div className="d-flex">
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="" />
                    <h5>Rahul k</h5>
                </div>
                <div class="card-body">

                    <p class="card-text">Highly disappointed with the quality of the samosa today. It was half cooked and felt like we were eating raw maida. Didn't expect this from Amritsari.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            <div class="card  my-4">
                <div className="d-flex">
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="" />
                    <h5>Manprit Tiwari</h5>
                </div>
                <div class="card-body">

                    <p class="card-text">Dahi used was not fresh</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            <div class="card  my-4">
                <div className="d-flex">
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="" />
                    <h5>Akash rathod</h5>
                </div>
                <div class="card-body">

                    <p class="card-text">Order has only 1 gulab jamun box but we ordered 2</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>

            <div class="card my-4">
                <div className="d-flex">
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="" />
                    <h5>Prayay Kumar</h5>
                </div>
                <div class="card-body">

                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </REVIEWS>
    )
}

export default Reviews1

const REVIEWS = styled.div`
/* overflow: scroll;
height: 500px;
::-webkit-scrollbar{
    display: none;
 } */

hr{
    color: gold;
}

h4{
    color: #fff;
    text-align: left;
 }

.card{
 background-color: transparent;
 border-bottom: solid #292525  1px;;

h5{
    padding: 10px;
}
p{
    color: #999;
}

 img{
    height: 50px;
    width: 50px ;
 }

}

`;