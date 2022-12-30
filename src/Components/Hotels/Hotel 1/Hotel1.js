import { HOTEL } from "./Hotel-1-Style";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useSelector} from 'react-redux'
import { Bag } from 'react-bootstrap-icons'

const Hotel_1 = () => {

    const Navigate = useNavigate();
    const cart_items = useSelector((state)=> state.Cart)
    

    useEffect(() => {
        Navigate('order1')
        // eslint-disable-next-line 
    }, [])

    return (
        <HOTEL >

            <div id="carouselExampleIndicators" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipNzWnJgymggWTwW7E9KeEUxjUPYklOT36o5fL2a=w1080-k-no" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.cntraveller.in/photos/614071700adc3d1e95c7adbd/master/pass/outdoor-dining-pune-daily-all-day.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="details container my-4">
                <h2>Hotel name</h2>
                <h4>North Indian, Street Food</h4>
                <h4>Wakad, Pune</h4>
                <h5>Open now
                    11am – 11pm (Today)
                </h5>
            </div>

            {/* Search bar  */}
            <div className="Search container-fluid">
                <form role="search" method="get" className="search-form form" action="">
                    <label>
                        <span className="screen-reader-text">Search for...</span>
                        <input type="search" className="search-field shadow  bg-light " placeholder="Type something..." name="s" title="" />
                    </label>
                    <input type="button" className="search-submit button" value="Search" />
                </form>
            </div>

            {/* Main section  */}
            <div className="container-fluid">
                {/* Navigation */}
                <div className="navigation">
                    <ul>
                        <li>
                            <Link className="link" to={"overview1"} > Overview</Link>
                        </li>
                        <li>
                            <Link className="link" to={"order1"} > Order</Link>
                        </li>
                        <li>
                            <Link className="link" to={"reviews1"} > Reviews</Link>
                        </li>
                        <li>
                            <Link className="link" to={"menu1"} > Menu</Link>
                        </li>
                        
                    </ul>

                    <div onClick={()=>Navigate('cart1')} className="cart d-flex">
                            <Bag className="bag" />
                            <span >{cart_items.length}</span>
                        </div>  

                </div>

                <Outlet />

            </div>

        </HOTEL>

    )
}

export default Hotel_1;