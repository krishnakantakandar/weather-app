import React,{useState,useEffect} from 'react'

 const UseEffect = () => {
     const initialState = 15;
     const [myName, setMyname] = useState(initialState)
     useEffect(() => {
         document.title= `chats(${myName})`;
         
     });
    return (
        <>
          <div className="center_div">
              <p>{myName}</p>
              <div className="button2" onClick={()=>setMyname(myName+1)}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  INCR
              </div>
          
          </div>  
        </>
    )
};

export default UseEffect;

//useefect rus after every render  if there is any change in component then it will rerun
// useeffect is use to for xample u want to render or show something after some time then use useeffect
// useEffect(() => {
         
//},[]);
// if uuse [] the useeffect function will be call only when refresh
// else invoke that function on every event