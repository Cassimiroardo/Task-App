import React, { useState } from 'react';
import Register from './components/Register/index'
import TaskItem from './components/TaskItem/index'
import './App.css'
import './global.css'

function App() {

  const [task, setTask] = useState([])

  return (
    <>
    <section>
      <Register/>
    </section>
    <main>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
    </main>    
    </>
  );
}

export default App;
