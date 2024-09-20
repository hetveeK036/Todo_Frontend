const API_URL = "http://localhost:8080/todos";
// const API_URL = process.env.REACT_APP_TODO_API_URL;


//Get Task from Database
export const getTask = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch Task');
    return response.json();
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

//Add Task
export const addTask = async (task) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error("Failed to add task");
    return await response.json();
  } catch (error) {
    console.error("Error while adding task:", error);
    throw error;
  }
};

//update Task
export const updateTask = async (id, updatedTask) => {
  try{
  const response = await fetch(`http://localhost:8080/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) {
    throw new Error('Failed to update task');
  }  else {
    return await response.json();
  }  
  } catch(error) {
    console.log('error while updating task  :', error);
    throw error;
  }
};

//Delete TAsk
export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete task");
  } catch (error) {
    console.error("Error while deleting task:", error);
    throw error;
  }
};