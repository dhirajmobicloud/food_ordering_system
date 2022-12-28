import { useEffect, useState } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";

const Order1 =(props)=>{

    const [items, setItems] = useState([])

    const Get_items =()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`)
        .then((res)=>{
            return res.json()
        }).then((res1)=>{
            console.log(res1.meals)
            setItems(res1.meals)
        })
    }

    useEffect(()=>{
        Get_items();
    },[])

    return(
        <ORDER className="d-flex">
            <div className="sidebar">
                <ul>
                    <li className="nav-link">Recommended</li>
                    <li className="nav-link">Meals and Thali </li>
                    <li className="nav-link">Starters</li>
                    <li className="nav-link">Main Course</li>
                    <li className="nav-link">Breads</li>
                    <li className="nav-link">Rice and Biryani </li>
                    <li className="nav-link">Snacks All Day</li>
                    <li className="nav-link">Accompaniments </li>
                    <li className="nav-link">Desserts and Beverages </li>
                </ul>
            </div>
            <div className="items d-flex">

                {items.map((element)=>{
                    return <ItemCard img={element.strMealThumb} title={element.strMeal}/>
                })}

                {/* <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/> */}
            </div>
        </ORDER>
    )
}

export default Order1

const ORDER = styled.div`

height: 500px;

.sidebar{
    width: 250px;
    border-right: solid gold 1px;
    height: 500px;
    display: flex;
}

ul{
    margin: auto;

    li{
        padding: 10px;
        color: lightgoldenrodyellow;
        font-size: 1.1rem;
    }
}

.items{
    flex-direction: column;
    overflow: scroll;
}

.items::-webkit-scrollbar{
    display: none;
 }

`;