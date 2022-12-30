import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Hotel4 = () =>{

    const Navigate =useNavigate()

    return(
        <HOTEL4 className="d-flex">
        <h1>Hotel 4 page is not available now please check <span onClick={()=>Navigate('/hotel_1')}>hotel 1</span> page</h1>
        </HOTEL4>
    )

}

export default Hotel4

const HOTEL4 = styled.div`
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