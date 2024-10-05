import React,{useState,useEffect} from 'react';

function TodoInput(props) {
    const [inputText,setInputText ] = useState('')
    
    useEffect(() => {
        if (props.isEditing) {
          setInputText(props.editText);
        }
      }, [props.isEditing, props.editText]);
    
      const handleInputChange = (e) => {
        setInputText(e.target.value);
        if (props.isEditing) {
            props.setEditText(e.target.value);
        }
      };
     return (
    <div className="input-container">
        <input 
        type="text" 
        className="input-box-todo"
        placeholder="Enter your Todo"
        value={inputText}
        onChange={handleInputChange}
        />
        <button className="add-btn"
         onClick={() => {
        props.addList(inputText);
        setInputText('');
         props.setEditText('');
  }}
          >
        +</button>
    </div>
  )
}

export default TodoInput