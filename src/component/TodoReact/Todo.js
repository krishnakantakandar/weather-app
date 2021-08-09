import React,{useState,useEffect} from 'react'
import "./style.css"


const GetLocalStorage = () =>{
    const list = localStorage.getItem("myTodoList");
    if(list){
        return JSON.parse(list);
    }
    else{
        return  [];
    }
}
 const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(GetLocalStorage());
    const [isEditItem, setisEditItem] = useState("");
    const [toggle, settoggle] = useState(false);

    const AddItem = () =>{
        if(!inputData){
         alert('plx fill tha data');
        }else if(inputData && toggle){
             
            setItems( 
                items.map((curEle) =>{
                    if(curEle.id === isEditItem){
                        return {...curEle,name:inputData}
                    }
                    return curEle;
                })
               
            );
            setInputData("");
            setisEditItem(null);
            settoggle(false);

        }
        else{
             const myData = {
                 id: new Date().getTime().toString(),
                 name:inputData
             }
             setItems([...items,myData]);      
            setInputData("");   }
    }
    const DeleteItem =(index) =>{
        const updatedItem = items.filter((curEle) =>{
            return curEle.id !== index;
        });
        setItems(updatedItem);

    }
    const EditItem = (index) =>{
        const item_todo_edit = items.find((curEle) =>{
            return curEle.id === index;
        });
        setInputData(item_todo_edit.name);
        setisEditItem(index);
        settoggle(true);
    }
    const RemoveAll = () =>{
        setItems([]);
    }
    // addding to local storage
    useEffect(() => {
     localStorage.setItem("myTodoList",JSON.stringify(items));  
    }, [items]);
    // when there is a change in items it will tigger
    return (
        <>
        <div className="child-div">
         
                <div className="heading">
                
                    <img src="/images/to-do-list.png"  alt="hello"></img>
                    Add Your List Here
              
                </div>
                <div className="addItems">
                    <input type="text" placeholder="add items" className="form-control" value={inputData} onChange={(event)=>setInputData(event.target.value)}></input>
                    {
                    toggle ?(<i className="far fa-edit" aria-hidden="true" onClick={AddItem}></i>): (<i className="fa fa-plus" aria-hidden="true" onClick={AddItem}></i>)
                    }
  
                   
                </div>
                {/* show our items */}
                <div className ="showItems">
                    {
                        items.map((curEle,index) =>{
                            return(
                                <div className="eachItem" key={curEle.id}>
                                <h3>{curEle.name}</h3>
                                <div className="todo-btn">
                                <i className="far fa-edit" aria-hidden="true" onClick={()=>EditItem(curEle.id)}></i>
                                <i className="far fa-trash-alt" aria-hidden="true" onClick={()=>DeleteItem(curEle.id)}></i>
                            </div>
                            </div>

                            )
                        })
                    }
              
                </div>

                {/* remove all button */}
                <div className="showItem"><button className="btn effect" data-sm-link-text="Remove All" onClick={RemoveAll}>
                    <span>check List</span></button></div>
            </div>
        
        </>
    )
}
export default Todo;
