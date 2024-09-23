import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return prompt('Editar tarea', task);
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Lista</h1>
      <input
        type="text"
        value={task}
        placeholder="Agregar tarea"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
          {task} <button onClick={() => deleteTask(index)}>Eliminar</button>
          <button onClick={() => editTask(index)}>Editar</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
