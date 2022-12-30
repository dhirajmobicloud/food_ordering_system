import { useEffect, useState } from "react";
// import { Link, Outlet } from 'react-router-dom'
import styled from "styled-components";
import Loder from "../../Loders/Loder";
import ItemCard from "./ItemCard";

const Order1 = (props) => {

    const [items, setItems] = useState([])
    const [loding, setLoding] = useState(false)

  
    let Category = props.Category
    const Get_items = () => {
        setLoding(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`)
            .then((res) => {
                return res.json()
            }).then((res1) => {
                console.log(res1.meals)
                setItems(res1.meals)
                setLoding(false)
            })
            console.log("Get  items called")
    }

    useEffect(() => {
        Get_items();
        console.log("Use effet called")
        // eslint-disable-next-line 
    },[Category])

    return (
        <ORDER className=" container">
           
            <div className="items row g-3 ">

                { !loding ?  items.map((element) => {
                    return <ItemCard key={element.idMeal} img={element.strMealThumb} title={`${element.strMeal.slice(0,15)}...`} Element={element} modal_title={element.strMeal} modal_id={element.idMeal} />
                }):<Loder/>}


            </div>
            {/* <div className="chef-image d-flex">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-logo%2C-chef-poster%2C-chef-post-design-template-01dc0e03960c05a9ea1eb5ee46e769d7_screen.jpg?ts=1641408119" alt=""/>
            </div> */}
        </ORDER>
    )
}

export default Order1

const ORDER = styled.div`

height: 500px;
display: flex;

.items{
    margin-top: 20px;
    /* display: flex; */
    /* flex-direction: column; */
    overflow: scroll;
}

.items::-webkit-scrollbar{
    display: none;
 }

 .chef-image {
    margin: auto;
    img {
    width: 400px;
    border-radius: 30px;
    margin: auto;
 }
 }
 

 

`;