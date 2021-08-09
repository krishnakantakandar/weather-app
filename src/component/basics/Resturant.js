import React ,{useState} from 'react'
import "./style.css"
import MenuApi  from './menuApi';
import  MenuCard  from './MenuCard';
import NavBar from './NavBar';


const uniquCatagorylist =[ ...new Set(MenuApi.map((curEle) =>{
    return curEle.catagory;
})),"all"];
// console.log(uniquCatagorylist)

 const Resturant = () => {
    const [menuData, setMenuData] = useState(MenuApi);
    const [menuList, setMenuList] =useState(uniquCatagorylist);
    const filterItem = (catagory) =>{
        if(catagory === "all")
            {
                setMenuData(MenuApi);
                return;
            }
        const updatedList =MenuApi.filter((curEle) =>{
            
            return curEle.catagory === catagory;
        })
        setMenuData(updatedList);// it update the menudData

    };
    return (
       <>
     <NavBar filterItem={filterItem} menuList={menuList}></NavBar>
       <MenuCard menuData={menuData}></MenuCard>
       </>
    );
};
export default Resturant;


// useState is use to manage the data
//menuData={menuData} props  passing the data from parent component to child
