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
  const tasks = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy to production' }
  ];

  return (
    <div className="App">
      <h1>My Task List</h1>
      <div>
        {tasks.map(task => (
          <TaskItem key={task.id} text={task.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
