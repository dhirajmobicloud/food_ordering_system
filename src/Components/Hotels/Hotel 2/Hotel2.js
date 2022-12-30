import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Hotel2 = () =>{

    const Navigate = useNavigate();

    return(
        <HOTEL2 className="d-flex">
        <h1>Hotel 2 page is not available now please check <span onClick={()=>Navigate('/hotel_1')}>hotel 1</span>  page</h1>
        </HOTEL2>
    )

}

export default Hotel2

const HOTEL2 = styled.div`
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