import {  useRef } from "react"

export function Todos({todos}){ 
   // here destructure 
  


    const mark = (todo , buttonRef) => {

        // buttonRef.current.innerText = "Completed";
        if (buttonRef.current.innerText === "Mark as Completed") {
            buttonRef.current.innerText = "Completed";
            alert(`${todo.title} is now marked as completed.`);
        } else {
            buttonRef.current.innerText = "Mark as Completed";
            alert(`${todo.title} is still pending toDo..`);
        }
        


        
    };

    // useEffect(() => {
    //  inputr.current.completed()
    // }, [])
    
    return <div>
       {todos.map(function(todo){
             const buttonRef = useRef();
      
        return <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button ref={buttonRef} onClick={()=> mark(buttonRef)}> {todo.completed ? "Completed" : "Mark as Completed"}</button>
            </div>
       })}
    </div>
}
// const mark = (id)=>{
//     inputr.current.completed()
// }