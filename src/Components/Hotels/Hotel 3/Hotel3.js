import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Hotel3 = () =>{

    const Navigate = useNavigate()

    return(
        <HOTEL3 className="d-flex">
        <h1>Hotel 3 page is not available now please check <span onClick={()=>Navigate('/hotel_1')}>hotel 1</span> page</h1>
        </HOTEL3>
    )

}

export default Hotel3

const HOTEL3 = styled.div`
height: 100vh;
background-color: black;

h1{
    margin: auto;
}

span{
    text-decoration: underline;
    color: #fff;
}

`