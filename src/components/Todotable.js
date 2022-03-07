import React from 'react';

const Todotable = (props)=>{
return(
    <div>
        <table>
        <tbody>
        <tr>
            <th>Description</th>
            <th>Date</th>
        </tr>
        {
        props.todos.map((todo, index) =>
          <tr key={index}>
            <td>{todo.desc}</td>
            <td>{todo.date}</td>
            <td>
              <input type = "submit"  value="Delete" onClick={() =>props.remove(index)} />
            </td>
            </tr>
        )}
        </tbody>
        </table>

    </div>
    );
}

export default Todotable;