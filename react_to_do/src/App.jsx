import { useState } from 'react';
import './App.css';

function TaskItem(props) {
  return (
    <div style={{ 
      padding: '10px', 
      margin: '10px 0', 
      border: '1px solid #ddd',
      borderRadius: '4px'
    }}>
      <p>{props.text}</p>
    </div>
  );
}

function App() {
  // State: current list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy to production' }
  ]);

  // State: current value of input field
  const [newTaskText, setNewTaskText] = useState('');

  // Handler to add a new task
  const addTask = () => {
    if (newTaskText.trim() === '') return; // Don't add empty tasks

    const newTask = {
      id: Date.now(), // Simple way to generate unique IDs
      text: newTaskText
    };

    setTasks([...tasks, newTask]); // Add new task to array
    setNewTaskText(''); // Clear the input
  };

  return (
    <div className="App">
      <h1>My Task List</h1>
      
      {/* Input section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter a new task"
          style={{
            padding: '8px',
            width: '70%',
            fontSize: '16px'
          }}
        />
        <button 
          onClick={addTask}
          style={{
            padding: '8px 16px',
            marginLeft: '10px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Task
        </button>
      </div>

      {/* Task list */}
      <div>
        {tasks.map(task => (
          <TaskItem key={task.id} text={task.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
