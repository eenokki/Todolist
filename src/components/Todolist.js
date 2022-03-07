import React from 'react';
import Todotable from './Todotable';

 const Todolist=()=>{
  const [todo, setTodo] = React.useState({desc: '', date: ''});
  const [todos, setTodos] = React.useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) =>{
    event.preventDefault();

    setTodos([...todos, todo]);
  }
  
  const removeInput = (index) => {

    setTodos(todos.filter((todo, i) => i !== index));
  };
  
  return (
    <div className="App">
      <form onSubmit={addTodo}>
      <label>Date:</label>
      <input type ="date" name= "date" value= {todo.date} onChange ={inputChanged}/>
      <label>Description:</label>
      <input type ="text" name = "desc" value= {todo.desc} onChange ={inputChanged}/>
      <input type = "submit" value="Add" />
      </form>
      <Todotable todos={todos} remove={removeInput}/>
    </div>
  );
}
export default Todolist;