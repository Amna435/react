import React from 'react'
import { Box, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
function TodoList({ listitem, index, deleteItem, editItem })  {

  return (
    <Box 
    d="flex" 
    textColor="black"
    alignItems="center" 
    justifyContent="space-between" 
    p={4} 
    bg="green.100" 
    borderRadius="md" 
    mb={2}
>
<Text>{listitem}</Text>
            <Box>
                <IconButton 
                    icon={<EditIcon />} 
                    bg="green.500" 
                    onClick={() => editItem(index)}
                    mr={2}
                />
                <IconButton 
                    icon={<DeleteIcon />} 
                    bg="green.500" 
                    onClick={() => deleteItem(index)}
                />
            </Box>
        </Box>
    );
}


export default TodoList