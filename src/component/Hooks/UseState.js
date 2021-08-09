import React,{useState} from 'react'

 const UseState = () => {
     const initialState = 15;
     const [myName, setMyname] = useState(initialState)
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
              <div className="button2" onClick={myName>0? ()=>setMyname(myName -1 ):()=>setMyname(0)}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  DECR
              </div>
          </div>  
        </>
    )
};

export default UseState;
