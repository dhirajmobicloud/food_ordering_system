import styled from "styled-components";

export const HOTEL = styled.div`
/* height: 100vh; */
display: flex;
flex-direction: column;
background-color: black;

h1{
    margin: auto;
    color: #fff;
}

.carousel{
    margin-top: 65px;
    
    /* padding: 50px; */
}

.carousel-item img{
    border-radius: 20px !important ; 
    height: 60vh;
}

.details h2, h4, h5{
    color: gold;
    font-weight: 400;
    padding: 5px;
    /* text-align: center; */
}

.Search {
  padding: 2rem;
  background-color: #0a0a0a;
  margin: 20px auto;
}

input[type="search"] {
  -webkit-appearance: none !important;
  background-clip: padding-box;
  background-color: white;
  vertical-align: middle;
  border-radius: 0.25rem;
  border: 1px solid #e0e0e5;
  font-size: 1rem;
  width: 100%;
  line-height: 2;
  padding: 0.375rem 1.25rem;
  -webkit-transition: border-color 0.2s;
  -moz-transition: border-color 0.2s;
  transition: border-color 0.2s;
}

input[type="search"]:focus {
  transition: all 0.5s;
  /* box-shadow: 0 0 40px #f9d442b9; */
  border-color: #f9d342;
  outline: none;
}

form.search-form {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 30vw;
}

label {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: center;
  margin-bottom: 0;
}

input.search-field {
  margin-bottom: 0;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: center;
  height: 51px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

input.search-submit {
  height: 51px;
  margin: 0;
  padding: 1rem 1.3rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-family: "Font Awesome 5 Free";
  font-size: 1rem;
}

.screen-reader-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

.button {
  display: inline-block;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.15;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background: #f9d342;
  color: #292826;
  border: 1px solid transparent;
  vertical-align: middle;
  text-shadow: none;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}

.button:hover,
.button:active,
.button:focus {
  cursor: pointer;
  background: #d4b743;
  color: #292826;
  outline: 0;
}


.navigation {

    display: flex;
    border-bottom: solid gold 1px;
    justify-content: space-between;

  ul{
    display: flex;
    padding: 10px;
    margin-bottom: 0;
    /* border-bottom: solid gold 1px; */

    li{
      list-style-type: none;
      padding: 0 20px;
      font-size: 1.1rem;
      color: #fff;
        .link{
          text-decoration: none;
          color: #fff;  
        }
    }
    
    .link:hover,
    .link:focus{
        color: #d4b743;
    }
}

.cart{
  margin: 5px 50px 5px 5px;
  color: gold;
  font-size: 1.5rem;
  align-items: baseline;
  background-color: #292826;
  border-radius: 10px;
  padding: 0px 10px;
  cursor: pointer;

  span{
    margin: 5px;
  }

}

}



`;