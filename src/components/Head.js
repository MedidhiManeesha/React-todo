import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import TodoModal from './TodoModal';
import TodoList from './TodoList';

const Head = () => {
  const [todos, setTodos] = useState(getStoredTodos());
  const [modalOpen, setModalOpen] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    let task = event.target.task.value
    if (!task) {
      toast.error('Please provide a valid task')
      return
    }
    event.target.reset()
    setTodos([...todos, { task: task, completed: false }])
  }

  function getStoredTodos() {
    let data = localStorage.getItem("todos")
    let json = JSON.parse(data)
    if (json) {
      return json
    }
    return []
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  function changeTaskStatus(index) {
    let newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  function deleteTask(index) {
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  function deleteAllTasks() {
    let newTodos = [];
    setTodos(newTodos);
  }

  return (
    <div className="container my-5">
      <div className="mx-auto rounded-border p-4" style={{ width: "600px", backgroundColor: '#08618d' }}>
        <h1 className="bg-success text-light p-3">
          Todo List
        </h1>
        <form className='d-flex justify-content-between ' >
          <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalOpen(true)}>
            Add New Task
          </button>
          <button type="button" className="btn btn-outline-light" onClick={() => deleteAllTasks()}>
            Delete All
          </button>
        </form>

        <TodoModal handleSubmit={handleSubmit} />

        <TodoList
          todos={todos}
          changeTaskStatus={changeTaskStatus}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  )
}

export default Head;
