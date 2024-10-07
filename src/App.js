import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Button,Text,Box, Heading, Divider, useColorMode } from '@chakra-ui/react';
function App() {
  const [listTodo,setListToDo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();


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
    <Box className="main-container"  bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} minH="100vh" p={8}>
      <Box className="center-container"  maxW="md" mx="auto">
        
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </Button>

        <TodoInput
          addList={addList}
          editText={editText} 
          setEditText={setEditText}
          isEditing={editIndex !== null}
          />
            <Text color="black" fontSize="2xl" mt={4}>
        </Text>
        <Heading as="h1" size="xl" mb={4} textAlign="center">Todo List </Heading>
        <Divider mb={4} />
       {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} listitem={listItem} deleteItem={deleteListItem} editItem={editListItem} />

        );
       })}
      </Box>
    </Box>
  );
}

export default App;
