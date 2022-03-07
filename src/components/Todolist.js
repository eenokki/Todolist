import React from 'react';

export default function Todolist(props){

    return(
        <div>
        <table>
        <tbody>
        {
          props.todos.map((todo, index) =>
          <tr key={index}>
            <td>{todo.desc}</td>
            <td>{todo.date}</td>
            <td>
              <input type = "submit"  value="Delete" onClick={() =>props.remove(index)} />
            </td>
            </tr>
          )
        }
        </tbody>
        </table>

        </div>
    );
}