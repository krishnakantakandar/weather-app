import React,{Component} from 'react';

class Message extends Component {
 constructor(){
     super();
     this.state ={
         message : "hello"
     }
 }
 changeMessage()
 {
     this.setState({
         message:"hi"
     })
 }

 render(){
     return(
         <>
          <p>{this.state.message}</p>
          <button onClick={()=>this.changeMessage()}></button>
         </>
     )
 }

}
export default Message;


