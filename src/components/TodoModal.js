import React from 'react';

const TodoModal = ({ handleSubmit }) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <label className="form-label">Task Title</label>
              <input className="form-control me-2" type="search" name='task' placeholder="New Task" />
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoModal;
