import React from 'react'

 const NavBar = ({filterItem, menuList}) => {
    return (
        <>
              <nav>
           <div className="btn-group">
               {
                   menuList.map((curEle)=>{
                        return (
                            <button className="btn-group-item" onClick={() => filterItem(curEle)}>{curEle}</button>

                        )
                   })
               }
           
           </div>
       </nav>
        </>
    )
}
export default NavBar;
