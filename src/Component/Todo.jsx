import { Box, Button, Container, TextField, Typography } from "@mui/material";
import useStyles from './style';
import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
    const classes = useStyles();
    // Initialize task as an empty string
    const [task, setTask] = useState([]); 
    const  [inputValue, setInputValue] = useState(''); // handle input field
    
    const handleChange = (e) => {
        setInputValue(e.target.value);
        console.log('input Value : ', inputValue);
    };

    // Handle adding a new task
    const handleAddTask = (e) => {
        e.preventDefault();
        if (inputValue.trim()) { // Ensure input is not empty or just spaces
            setTask([...task, inputValue]); // Add the new task to the list
            setInputValue(''); // Clear the input field after adding
        }
    };

    // Handle deleting a task
    const handleDelete = (taskToDelete) => {
        setTask(task.filter(todo => todo !== taskToDelete)); // Filter out the task to be deleted
        console.log("Deleted Task :", taskToDelete)
    };

    return (
        <Container className={classes.container} >
            <Box className= {classes.todoComponent}>
                <Typography className={classes.header} variant="h3" component='h4'>Todo List</Typography>
                <Box className= {classes.inputTask}>
                    <TextField
                        className={classes.inputField}
                        id="outlined-basic"
                        label="Task"
                        variant="outlined"
                        placeholder="Enter your Task"
                        // sx={{ width: '40%', height: '10px', padding: '10px' , borderRadius: '10px' }}
                        onChange={handleChange}
                        value={inputValue}
                        
                    />
                    <Button className={classes.addButton} variant="contained" onClick={handleAddTask}>Add Task</Button>
                    <Box className={classes.todoList} 
                    // sx={{marginTop:'10%'}}
                    >
                    {task.map((todo, index) => (
                            <TodoItem 
                                // className={classes.todoItems}  
                                key={index} 
                                todo={todo} 
                                onDelete={handleDelete} 
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Todo;
