import styled from "styled-components";

const Menu1 = () => {

    return (
        <MENU>
            <div className="container d-flex">
                <h4>Amritsari Menu</h4>
                <div className="menu d-flex">
                    <h6>Here is the menu card</h6>
                    <img src="https://b.zmtcdn.com/data/menus/248/18933248/6b41ab849d28532a6eed824c8fbd8f09.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="" />
                </div>
            </div>

        </MENU>
    )
}

export default Menu1

const MENU = styled.div`

height: 500px;

h4{
    margin: 10px;
}

.container{
    flex-direction: column;
}

.menu {
    margin: auto;
    flex-direction: column;

    img {
        margin: auto;
        width: 300px;
        height: 300px;
    }
    h6{
        text-align: center;
        margin: 20px auto;
        color: #fff;
    }
}   

`;