// import { useState } from "react";
// import ListShow from "./components/ListShow";
// import { UserInput } from "./components/UserInput";


// const toDoList = [
//     1,
//     2,
//     3,
//     4,
// ]

// const List = () =>{
//     const [list, setList] = useState([toDoList])
//     const [input, setInput] = useState("")

//     const addHandler = () =>{
//         setList([...list, ])
//         // let storedList = list.concat({input})
//         // setList(storedList)
//     }
//     const removeHandler = (index) =>{
//         let storedList = [...list]
//         storedList.splice(index ,1)
//         setList(storedList)
//     }
//     // const userInput = (event) =>{
//     //     setInput (event.target.value);
//     // }
//     return(
//         <div>
//             <h1>This is my to do list for the day</h1>
//             <Asd items={list}/>
//             {/* {list.map((item) => {
//                 return <h1> {item.input}</h1>
//             })} */}
//             <input type="text" value={input} onChange={userInput}/>
//             <button type="button" onClick = {addHandler}>Add to the list</button>
//             <button type="button" onClick = {removeHandler}>Delete form the list</button>
//             {/* <p>{input}</p>
//             <form>
//                 <label>
//                     Name:
//                     <input type="text" value={input} onChange={userInput}/>        
//                 </label>
//                     <input type="submit" value="Submit" />
//             </form> */}
//         </div>
//     )                   
// }
// const List = () =>{
//     const [list ,setList] =useState([])

//     const handleForm = (newItem)=>{
//         setList([...list, newItem])
//     }
//     const handleDelete = (item) =>{
//         let storedList = [...list]
//         let remainder = storedList.filter(currentItem => currentItem !== item)
//         setList(remainder)
//     }
//     return (
//         <div className="wrapper">
//             <UserInput handleForm={handleForm}/>
//             <ListShow items={list} handleDelete={handleDelete} />
//         </div>
//     )
// }
// export default List;