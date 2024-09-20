import { Typography, Button, Box } from "@mui/material";
import useStyles from "./style";
import { useState } from "react";
import  PropTypes  from "prop-types";

// import {todo,onComplete, onDelete} from './Todo'

const TodoItem = ({ todo, onComplete, onDelete }) => {
  const classes = useStyles();

  const [isChecked, setIsChecked] = useState(todo.completed); // handle check button

  const handleCheck = (t) => {
    setIsChecked(!t.completed); // update local state
    onComplete(t); // trigger task completion update
  };

  // Assuming `todo` is an object, access a property like `todo.text`
  return (
    <Box className={isChecked ? classes.checkedItem : classes.todoItem}>
      <Typography
        variant="body1"
        className={isChecked ? classes.checkedText : classes.todo}
        // style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}s
      >
        {/* /*  add css for text write in left hand side  *\ */}
        {todo.task}
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleCheck(todo)}
        >
          {!isChecked ? "Check" : "UnCheck"}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(todo)}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};


TodoItem.propTypes = {
    todo: PropTypes.shape({
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  

export default TodoItem;
