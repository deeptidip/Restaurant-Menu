//import React from 'react'


// function NavBar({filterItem,menuList}) {
//   return (
//     <>
//     <nav className="navbar">
//      <div className="btn-group">
//         <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>BreakFast</button>
//         <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
//         <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
//         <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
//         {/* <button className="btn-group__item" onClick={()=>setmenuData(Menu)}>All</button> */}
        
//      </div>
//     </nav>
//     </>
//   )
// }

// export default NavBar
import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;