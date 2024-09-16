// const API_URL = 'http://localhost:8081/todo'; 

export const getTask =  async () => {
    const response = await fetch('http://localhost:8081/');
    if(!response.ok) throw new Error('Failed to fetch Task');
    return response.json();
};

// Function to add a task
export async function addTask(task) {
    try {
        const response = await fetch('http://localhost:8081/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error('Failed to add task');
        }
        return await response.json();
    } catch (error) {
        console.error('Error  B:', error);
        throw error;
    }
}
export const updateTask = async(id, updates) => {
    const response = await fetch(`http://localhost:8081/${id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(updates),
    }) ;
    if(!response.ok) throw new Error('Failed to Update Task');
    return response.json()
};

export const deleteTask = async(id) => {
    const response = await fetch(`http://localhost:8081/${id}`, {
        method: 'DELETE',
    });
    if(!response.ok) throw new Error('Failed to delete Task');
};

