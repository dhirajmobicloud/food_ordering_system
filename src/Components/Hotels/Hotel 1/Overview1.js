import styled from "styled-components";


const Overview1 = () => {

    return (
        <OVERVIEW className="py-4">
            <div className="container py-2">
                <h4> About </h4>
                <h6>Casual Seating Area, Outdoor Seating Arrangement, Pocket Friendly, Great Recommendations, Mouth Watering Food, Polite Staff</h6>
            </div>
            <div className="container py-2">
                <h4> Call </h4>
                <h6>+91 7412583690</h6>
                <h6>+91 9632587410</h6>
            </div>
            <div className="container py-2">

                <div class="card" >
                    <img src="https://maps.zomato.com/php/staticmap?center=18.5954392966,73.7686865777&maptype=zomato&markers=18.5954392966,73.7686865777,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <span class="card-title btn btn-sm btn-outline-danger">Direction</span>
                        <p class="card-text">Shop 10-11, Riddhi Siddhi Heights, Mahatoba Chowk, Kaspate Vasti, Wakad, Pune</p>
                    </div>
                </div>
            
            </div>
        </OVERVIEW>
    )
}

export default Overview1

const OVERVIEW = styled.div`
/* height: 500px; */
.container{
    h4{
        color: #fff;
        text-align: left;
    }
    h6{
       
        color: grey;
    }
}
.card{
    width: 28rem;
    background-color: transparent;
    border:  solid #292525  1px;

    h5{
        cursor: pointer;
    }
    p{
        color: #fff;
    }
    span{
        color: #fff;
        border-radius: 20px;
    }
}
`;