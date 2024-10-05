import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  const [listTodo,setListToDo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  let addList = (inputText) => {
    if (inputText.trim() !== '') {
      if (editIndex !== null) {
        const updatedList = [...listTodo];
        updatedList[editIndex] = inputText;
        setListToDo(updatedList);
        setEditIndex(null);
        setEditText('');
      } else {
        setListToDo([...listTodo, inputText]); 
      }
    }
  };

   const editListItem = (index) => {
    setEditText(listTodo[index]);
    setEditIndex(index);
  };

  const deleteListItem = (key) =>{
    let newListTodo =[...listTodo];
    newListTodo.splice(key,1)
    setListToDo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput
          addList={addList}
          editText={editText} 
          setEditText={setEditText}
          isEditing={editIndex !== null}
          />
       <h1 className="app-heading">Todo List</h1>
       <hr/>
       {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} listitem={listItem} deleteItem={deleteListItem} editItem={editListItem} />

        );
       })}
      </div>
    </div>
  );
}

export default App;
