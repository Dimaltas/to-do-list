// import './App.css';
import { useState } from "react";

const App = () =>{
  const [myList, setMyList] = useState([])
  const [input, setInput] = useState("");
  
  const addHandler = (newList) =>{
    let storedList = myList.concat({input})
    setMyList(storedList)
  }
  const deleteHandler = (index) =>{
    let storedList = [...myList]
    storedList.splice(index,1)
    setMyList(storedList)
  }
  const userInput = (event) =>{
    setInput (event.target.value);
  }
  return(
    <div>
      <p>This is my to do list</p>
      <input type="text" value={input} onChange={userInput}/>
      <ul>
        {myList.map((item, index) => {
          return <h1>{item.input}</h1>
        })}
      </ul>
      <button type="button" onClick = {addHandler}>Add to the list</button>
      <button type="button" onClick = {deleteHandler}>Delete form the list</button>
      
    </div>
    
  )
}


export default App;
