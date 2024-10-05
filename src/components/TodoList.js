import React from 'react'

function TodoList(props) {

  return (
    <li className="list-item">
      <p>{props.listitem}</p>
      <div className="button-container">
      <button className="edit-btn" ></button>
        <span className='icons'>
        <i class="fa-solid fa-pen-to-square"
         onClick={e =>{
            props.editItem(props.index)
        }}></i>
        </span>
        <button className="delete-btn"></button>
        <span className='icons'>
        <i class="fa-solid fa-trash"
        onClick={e =>{
            props.deleteItem(props.index)
        }}></i>
        </span>
        </div>
    </li>
  )
}

export default TodoList