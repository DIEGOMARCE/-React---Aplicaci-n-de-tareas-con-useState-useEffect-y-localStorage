import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl';
import {Container} from './components/Container'


function App() {


  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState(false)

  function createNewTask(tasksName) {


    if (!tasksItems.find(tasks => tasks.name === tasksName)) {
      setTasksItems([...tasksItems, { name: tasksName, done: false }])
    }


  }

  const toggleTask = (tasks) => {
    setTasksItems(

      tasksItems.map((t) => (t.name === tasks.name) ? { ...t, done: !t.done } : t)
    );
  };


  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])


  const cleanTasks = () => {
    setTasksItems(tasksItems.filter(tasks => !tasks.done))
    setshowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))

  }, [tasksItems])

  return (
    <main className="bg-dark vh-100 text-white">
<Container>
<TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

      <VisibilityControl
        isChecked={showCompleted}
        setshowCompleted={(checked) => setshowCompleted(checked)}
        cleanTasks={cleanTasks}

      />

      {
        showCompleted === true && (
          <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} 
          />
        )
      }


</Container>

      </main>
  );
}

export default App;
