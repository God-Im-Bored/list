import React, { Fragment, useState } from "react";

const Edit = ({ todo }) => {
    const [description, setDescription] = useState(todo.description)

    const updateDescription = async (e) => {
        e.preventDefault(e)
        try {
            
        } catch(error) {
            console.error(error.message)
        }
    }
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
                <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>
                Edit
              </button>
             
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Edit;