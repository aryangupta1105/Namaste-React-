import { useState } from "react";
import { useEffect } from "react";
import resList from "../utils/resList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listRestaurants , setListRestaurants] = useState([]);


    useEffect(()=>{
      fetchData();
    } , []);
    const fetchData = async ()=>{
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();
      console.log(json)
      const newData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(newData);
      setListRestaurants(newData);      
    };
    if(listRestaurants.length === 0){
      return <Shimmer></Shimmer>
    }
    return (
      <div className="body">
        <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button className="filter-btn" 
          onClick={() =>{ 
            const filteredList = listRestaurants.filter((res)=> res.info.avgRating > 4
          );
            setListRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
        </button>
        </div>
        <div className="res-container">
          
          {
          /* This is one way to use list 
           <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} />
          <RestaurantCard resData={resList[10]} />
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} /> */}
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {listRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
  
          {/* // * or */}
  
          {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
        </div>
      </div>
    );
  };


export default Body;