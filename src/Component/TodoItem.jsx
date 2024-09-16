import { Typography, Button, Box } from "@mui/material";
import useStyles from './style';
import { useState } from "react";

const TodoItem = ({ todo, onDelete, onComplete }) => {
    const classes = useStyles();

    const [isChecked, setIsChecked] =useState(false); // handle check button

    const handleCheck = () => {
        setIsChecked(!isChecked);// update local state
        onComplete(todo); // trigger task completion update
    }

    // Assuming `todo` is an object, access a property like `todo.text`
    return (
        <Box className={isChecked ? classes.checkedItem : classes.todoItem}>
            <Typography variant="body1" className={isChecked ? classes.checkedText : classes.todo}>
                {todo} {/* If todo is an object, use todo.text or another property */}
            </Typography>
            <Box className= {classes.buttonContainer}>
             <Button variant="contained" color='success' onClick={handleCheck}>
             {!isChecked ? 'Check' : 'UnCheck'}
            </Button>
            <Button variant="contained" color="error" onClick={() => onDelete(todo)}>
                Delete
            </Button>   
            </Box>

        </Box>
    );
};

export default TodoItem;
