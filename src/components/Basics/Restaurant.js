import React,{useState} from "react";
import "./style.css"   
import Menu from "../menuApi";
import MenuCard from "../MenuCard";
import NavBar from "./NavBar";

const uniqueList=[
  ...new Set(Menu.map((currElem)=>{
  return currElem.category;
})
),
"All",
];
console.log(uniqueList);

const Restaurant=()=> {
    const [menuData,setmenuData]=useState(Menu);
    const [menuList,setmenuList]=useState(uniqueList);
    //console.log(Menu);
    const filterItem=(categoryselected)=>{
      if(categoryselected==="All"){
        setmenuData(Menu);
        return;
      }
      const updatedList=Menu.filter((curElem)=>{
     return curElem.category===categoryselected;
      })
      setmenuData(updatedList);
    }
    
  return (
    <>
    
    <NavBar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
  </>
  );
}

export default Restaurant;
