import React, { Component } from 'react';
import Register from './components/Register/index'
import TaskItem from './components/TaskItem/index'

import { index } from './services/TaskServices'

import './App.css'
import './global.css'

class App extends Component {
  
  state = {
    Task: []
  }

  componentDidMount(){
    this.loadTasks()
  }

  loadTasks = async _ => {
    const response = await index()

    console.log(response)

    this.setState({
      Task: response
    })
  }

  render(){
  return (
    <>
    <section>
      <Register/>
    </section>
    <main>
        <TaskItem key="1" description="esta é uma descrição" title="Titulo bem grande!!!"/>
    </main>    
    </>
  );
  }
}

export default App;
