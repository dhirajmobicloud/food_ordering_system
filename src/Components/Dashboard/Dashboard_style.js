
import styled from "styled-components";

export const DASHBOARD = styled.div`
 
 background-color: black;

.banner{
    height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    background-image: url("https://media-cdn.tripadvisor.com/media/photo-s/1a/6c/d2/52/the-maharajas.jpg");
   
}

.banner-content{
    background: rgba(0 0 0 / 50%);
    height: 60vh;
    display: flex;
    width: 100vw;
    flex-direction: column;
    /* position: relative; */
    padding-top: 100px;
     
}


@keyframes typing {
    from { width: 0 }
    to { width: 60% }
}


h1{
    margin: 30px auto;
    color: #fff;
    z-index: 1;
    overflow: hidden;
    border-right: .15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /*Keeps the content on a single line*/
   /* text-align: center; */
    animation: 
        typing 4.5s steps(40, end),
        blink-caret .75s step-end infinite  ;
    }

form{
    margin: 20px auto;
}

input {
padding: 10px;
width: 120px;
height: 50px;
background: none;
border: 4px solid #ffd52d;
border-radius: 40px;
box-sizing: border-box;
font-family: Comic Sans MS;
font-size: 26px;
color: #ffd52d;
outline: none;
transition: .5s;

/* position: absolute; */
}
.banner-content:hover input{
width: 300px;
/* background: #3b3640; */
border-radius: 10px;

}

.banner-content .i{
/* position: absolute; */
/* top: 50%; */
/* right: 15px; */
transform: translate(-50%,-50%);
font-size: 26px;
color: #ffd52d;
transition: .2s;
}
.banner-content:hover i{
opacity: 0;
z-index: -1;
}

.banner-content img{
    width: 150px;
    height: 150px;
    margin: auto;
}

`



