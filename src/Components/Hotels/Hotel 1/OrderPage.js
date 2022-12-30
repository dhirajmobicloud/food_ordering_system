import styled from "styled-components";
import { useState } from "react";
import Order1 from "./Order1";

const OrderPage = () => {

    const [category, setCategory] = useState('')

    return (
        <ORDER_PAGE>
            <div className="sidebar">
                <ul>
                    <li onClick={() => setCategory("Starter")} >
                        Starter
                    </li>
                    <li onClick={() => setCategory("Miscellaneous")}>
                        Miscellaneous
                    </li>
                    <li onClick={() => setCategory("Pasta")}>
                        Pasta
                    </li>
                    <li onClick={() => setCategory("Seafood")} >
                        Seafood
                    </li >
                    <li onClick={() => setCategory("Chicken")}>
                        Chicken
                    </li>
                    <li onClick={() => setCategory("Vegetarian")}>
                        Vegetarian
                    </li>
                    <li onClick={() => setCategory("Vegan")}>
                        Vegan
                    </li>
                    <li onClick={() => setCategory("Breakfast")}>
                        Breakfast
                    </li>
                    <li onClick={() => setCategory("Dessert")}>
                        Dessert
                    </li>
                </ul>
            </div>

            <Order1 Category={category ? category : "Starter"} />
        </ORDER_PAGE>
        

    )
}

export default OrderPage;

const ORDER_PAGE = styled.div`
height: 500px;
display: flex;

.sidebar{
    width: 250px;
    border-right:  solid #292525  1px;
    height: 500px;
    display: flex;
}

ul{
    margin: auto 0px;

    li{
        list-style-type: none;
        text-decoration: none;
        padding: 10px;
        color: lightgoldenrodyellow;
        font-size: 1.1rem;
        cursor: pointer;
        /* text-align: center; */

        :hover{
            background-color: #161616e0;
            color: gold;
            border-radius: 5px;
        }
        
    }
    
}

`