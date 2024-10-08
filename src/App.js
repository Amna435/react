import React, { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Button,Text,Box, Heading, Divider, useColorMode } from '@chakra-ui/react';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

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
    setListToDo([...newListTodo]);
  };
  return (
    <MotionBox 
    className="main-container" 
     bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
     minH="100vh"
     p={8}  
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.5 }}
     >
      <Box className="center-container"  maxW="md" mx="auto">
        
        <MotionButton 
        onClick={toggleColorMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
         >
          {colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </MotionButton>

        <TodoInput
          addList={addList}
          editText={editText} 
          setEditText={setEditText}
          isEditing={editIndex !== null}
          />
            <Text color="black" fontSize="2xl" mt={4}>
        </Text>
        <Heading 
        as="h1" 
        size="xl" 
        mb={4} 
        textAlign="center"
        >Todo List </Heading>
        <Divider mb={4} />
        
       {listTodo.map((listItem,i)=>(
         <MotionBox 
         key={i} 
         initial={{ opacity: 0, y: 20 }} 
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: i * 0.1 }}
       >
          <TodoList key={i} index={i} listitem={listItem} deleteItem={deleteListItem} editItem={editListItem} />
      </MotionBox>
       ))}
       </Box>
    </MotionBox>
  );
}



export default App;
