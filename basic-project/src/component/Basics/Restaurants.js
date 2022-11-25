import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from './navbar';


// const uniqueList = [
//   ...new Set(
//     Menu.map((curElem) => {
//       return curElem.category;
// })
// )
// ];
// console.log(uniqueList);

const Restaurants = () => {
  const [menuData,setMenuData] = useState(Menu);
  //console.log(menuData);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) =>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }

  return (
    <>
    <Navbar filterItem = {filterItem}/>
    <MenuCard menuData={menuData} />
     
    </>
  );
};

export default Restaurants
