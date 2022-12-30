import styled from "styled-components"

const Loder = () => {

    return (
        // <LODER className="d-flex">
        //     <h2>Loading...</h2>
        //     <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        // </LODER>
        <LODER >
            <div className="container">
                <div className="loader">
                </div>
            </div>
        </LODER>

    )
}

export default Loder

const LODER = styled.div`
 /* margin: auto;
 h2{
   text-align: center;
   margin: auto;
} */


display: flex;
/* body {
  margin: 0;
  background: #1c1d25;
} */

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79vw;
}

.loader {
  width: 50px;
  height: 50px;
  /* border-top: 4px solid rgb(237, 44, 73); */
  border-top: 4px solid gold;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


`