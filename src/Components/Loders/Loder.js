import styled from "styled-components"

const Loder = () => {

    return (
        <LODER className="d-flex">
            <h2>Loading...</h2>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </LODER>
    )
}

export default Loder

const LODER =styled.div`
 margin: auto;
 h2{
   text-align: center;
   margin: auto;
}

`