import React,{useState,useEffect} from 'react';
import { Input, Button, Box } from '@chakra-ui/react';
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
    <Box className="input-container" mb={4}>
        <Input 
        type="text" 
        textColor="black"
        className="input-box-todo"
        size="lg"
        mb={2}
        bg="green.100"
        placeholder="Enter your Todo"
        value={inputText}
        onChange={handleInputChange}
        />
        <Button className="add-btn"  bg="green.500"
         onClick={() => {
        props.addList(inputText);
        setInputText('');
         props.setEditText('');
  }}
          >
        +</Button>
    </Box>
  )
}

export default TodoInput