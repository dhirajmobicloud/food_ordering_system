// import styled from "styled-components";
// import logo from '../../assets/Logo.png'
import Cart from "./Cart";
import { DASHBOARD } from "./Dashboard_style";
// import {Search} from 'react-bootstrap-icons'

const Dashboard = () => {


    return (
        <DASHBOARD>
            <div className="banner ">
                <div className="banner-content">
                    {/* <img src={logo} alt=""/> */}
                    <div className="d-flex">
                        <h1 >Discover the best food & drinks in <span>Kolhapur</span></h1>
                    </div>

                    <form name="search">
                        <input type="text" className="input" name="txt" placeholder="Search" onmouseout="this.value = ''; this.blur();" />
                        {/* <Search className="i"/> */}
                    </form>

                </div>  
            </div>
            <div className="container py-2">
                    <div className="row g-6 my-4">
                           
                            <Cart hotel_name="hotel 1" hotel_id="hotel_1111"/>
                            <Cart hotel_name="hotel 2" hotel_id="hotel_2222"/>
                            <Cart hotel_name="hotel 3" hotel_id="hotel_3333"/>
                            <Cart hotel_name="hotel 4" hotel_id="hotel_4444"/>
                            
                    </div>
                </div>
                        
        </DASHBOARD>
    );
}

export default Dashboard;

// const DASHBOARD = styled.div`

    

//     /* .banner{
//         height: 60vh;
//         background-position: center;
//         background-repeat: no-repeat;
//         background-size: cover;
    
//         background-image: url("https://media-cdn.tripadvisor.com/media/photo-s/1a/6c/d2/52/the-maharajas.jpg");
       
//     }

//     .banner-content{
//         background: rgba(0 0 0 / 50%);
//         height: 60vh;
//         display: flex;
//         width: 100vw;
//         flex-direction: column;
       
//         padding-top: 150px;
         
//         h1{
//             margin: 30px auto;
//             color: #fff;
//             z-index: 1;
//             overflow: hidden;
//             border-right: .15em solid orange; 
//             white-space: nowrap; 
          
//             animation: 
//                 typing 4.5s steps(40, end),
//                 blink-caret .75s step-end infinite  ;
//             }

//         @keyframes typing {
//             from { width: 0 }
//             to { width: 60% }
//         }

//     }

//     form{
//         margin: 20px auto;
//     }

//     input {
//     padding: 10px;
//     width: 120px;
//     height: 50px;
//     background: none;
//     border: 4px solid #ffd52d;
//     border-radius: 40px;
//     box-sizing: border-box;
//     font-family: Comic Sans MS;
//     font-size: 26px;
//     color: #ffd52d;
//     outline: none;
//     transition: .5s;

  
// }
// .banner-content:hover input{
//     width: 300px;
//     background: #3b3640;
//     border-radius: 10px;
    
// }

// .banner-content .i{
//     transform: translate(-50%,-50%);
//     font-size: 26px;
//     color: #ffd52d;
//     transition: .2s;
// }
// .banner-content:hover i{
//     opacity: 0;
//     z-index: -1;
// }
//  */


// `;