import React from "react";
import Resturant from "./component/basics/Resturant";
import UseState from "./component/Hooks/UseState";
import UseEffect from "./component/Hooks/UseEffect";
import Reducer from "./component/Hooks/Reducer";
import Todo from "./component/TodoReact/Todo";
import Temp from "./component/weather/Temp";
import Message from "./component/classComponent/Message";

const App = () => {
  return (
    <>
      {/* <UseState></UseState>
  <UseEffect></UseEffect>
  <Reducer></Reducer> */}
      {/* <Todo></Todo> */}
      <Temp></Temp>
      {/* <Message></Message> */}
    </>
  );
};

export default App;

// return statement can only return one element
// if u ant to return mutiple tag then put all of them into a parent tag
// in react we can not use class becuse it is reserved for the actual class concept
// so we have to we className
// evrty tag should be closed
// atribute name should bein camel case

// const App = ()=>{
//   return React.createElement("div", {},"welcome to krishna kanta");   this is way react sees the above code
// };
