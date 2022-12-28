import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = () => {


    return (
        <NAVBAR>
            <nav className="navbar navbar-expand-lg " >
                <div className="container-fluid">
                    <Link className="navbar-brand mx-5" to="#">Hotel <span>UMANG</span></Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Login</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </NAVBAR>
    )
}

export default Navbar;

const NAVBAR = styled.div`
 position: absolute;
 span{
    color: red;
    font-weight: 700;
    height:50px;
    font-size: x-large;
    
 }

.navbar{
    
    width: 100vw; 
    z-index: 1;
}

.nav-link, .navbar-brand{
    color: white;
    font-weight: 600;
    
}

.nav-link{
    font-size: larger;
    padding: 10px;
}


.nav-link:hover{
    transform: scale(1.1);
    font-weight: bold;
    
   
}

.collapse{
    justify-content: end;
}

.navbar-nav{
        margin-right: 50px;
    }

`