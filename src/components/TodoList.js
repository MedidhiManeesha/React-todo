import React from 'react';

const TodoList = ({ todos, changeTaskStatus, deleteTask }) => {
  return (
    <div>
      {
        todos.map((todo, index) => {
          return (
            <div key={index} className='rounded mt-4 p-2 d-flex' style={{ backgroundColor: todo.completed ? '#87Fc68' : "LightGray" }}>
              <div className="me-auto">
                {todo.task}
              </div>
              <div>
                <i className={"h5 me-2 m-3" + (todo.completed ? "bi bi-check2-square" : "bi bi-square")} style={{ cursor: "pointer" }} onClick={() => changeTaskStatus(index)}></i>
                <i className="bi bi-trash3 text-danger h5" style={{ cursor: "pointer" }} onClick={() => deleteTask(index)}></i>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default TodoList;
