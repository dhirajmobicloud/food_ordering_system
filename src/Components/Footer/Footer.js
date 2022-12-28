import styled from "styled-components";


const Footer = () =>{


    return(
        <FOOTER>
            <p>&#169; All rights reserved </p>
        </FOOTER>
    )
}

export default Footer;

const FOOTER = styled.div`
background-color: gray;

p{
    margin: 0;
    padding: 3px;
    text-align: center;
}
`