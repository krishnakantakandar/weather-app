import React,{useState,useReducer} from 'react'


const ReducerFunc =(state,action) =>{
if(action.type === 'INCR'){
  console.log(state);
 return state + 1;
 
}
if(state > 0 && action.type === 'DECR'){
  // console.log(state);
    return state - 1;
  }
}
 const Reducer = () => {
     const initialState = 15;
    //  const [myName, setMyname] = useState(initialState)
    const [state, dispatch] = useReducer(ReducerFunc, initialState)
    return (
        <>
          <div className="center_div">
              <p>{state}</p>
              <div className="button2" onClick={()=>dispatch({type:'INCR'})}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  INCR
              </div>
              <div className="button2" onClick={()=>dispatch({type:'DECR'})}>
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

export default Reducer;
// with help of dispatch we say what action we have to perform
// dispach calls ReducerFunc
