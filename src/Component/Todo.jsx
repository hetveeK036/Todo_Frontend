import { Box, Button, Container, TextField, Typography } from "@mui/material";
import useStyles from "./style";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
// import PropTypes from "prop-types";
import { getTask, updateTask, deleteTask, addTask } from "./TodoServices";
import PropTypes from "prop-types";

const Todo = () => {
  const classes = useStyles();
  // Initialize task as an empty string
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState(""); // handle input field

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log("input Value : ", inputValue);
  };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const tasks = await getTask();
        console.log("Fetched tasks:", tasks);
        setTask(tasks);
        // setTask(Array.isArray(tasks) ? tasks : []);
      } catch (error) {
        console.log("Failed to fetch tasks  F:", error);
      }
    };
    fetchTask();
  }, []);

  // Handle adding a new task
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Ensure input is not empty or just spaces
      try {
        const newTask = await addTask({ task: inputValue, completed: false });
        //    setTask([...task, inputValue]); // Add the new task to the list
        setTask([...task, newTask]); // Add the new task to the list
        setInputValue(""); // Clear the input field after adding
      } catch (error) {
        console.error(" Failed to add task  F:", error);
      }
    }
  };

  // handle for completed task

 /* const handleComplete = async (taskToUpdate) => {
      try {
          const updatedTask = await updateTask(taskToUpdate.id, {
              task: taskToUpdate.task,
              completed: !taskToUpdate.completed,
            });

        setTask((prevTasks) =>
          prevTasks.map((t) => (t.id === taskToUpdate.id ? updatedTask : t))
        );
      } catch (error) {
        console.error("Failed to update task:", error);
      }
    }; */

  const handleComplete = async (taskToUpdate) => {
    const updatedTask = {
      task: taskToUpdate.task,
      completed: !taskToUpdate.completed,
    };

    console.log("Updating task:", taskToUpdate.id, updatedTask);

    try {
      const response = await updateTask(taskToUpdate.id, updatedTask);
      setTask((prevTasks) =>
        prevTasks.map((t) => (t.id === taskToUpdate.id ? response : t))
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  // Handle deleting a task
  const handleDelete = async (taskToDelete) => {
    // setTask(task.filter(todo => todo !== taskToDelete)); // Filter out the task to be deleted
    try {
      await deleteTask(taskToDelete.id); // pass task id for deletion
      setTask(task.filter((todo) => todo.id !== taskToDelete.id));
    } catch (error) {
      console.error("Failed to Delete TAsk F:", error);
    }
    console.log("Deleted Task :", taskToDelete);
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.todoComponent}>
        <Typography className={classes.header} variant="h3" component="h4">
          Todo List
        </Typography>
        <Box className={classes.inputTask}>
          <TextField
            className={classes.inputField}
            id="outlined-basic"
            label="Task"
            variant="outlined"
            placeholder="Enter your Task"
            size="small"
            // sx={{ width: '40%', height: '10px', padding: '10px' , borderRadius: '10px' }}
            onChange={handleChange}
            value={inputValue}
          />
          <Button
            className={classes.addButton}
            variant="contained"
            onClick={handleAddTask}
          >
            Add Task
          </Button>
          <Box
            className={classes.todoList}
            // sx={{marginTop:'10%'}}
          >
            {task.map((todo) => (
              <TodoItem
                // className={classes.todoItems}
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onComplete={handleComplete}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

Todo.prototype = {
  task: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
