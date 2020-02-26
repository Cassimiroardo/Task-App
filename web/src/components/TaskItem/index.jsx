import React from 'react';
import './style.css'

function TaskItem() {
    return (
      <>
        <div className="card"> 
        <div className="title">
          <i className="fas fa-thumbtack"></i>
          <h2>Titulo</h2>
        </div>
        <p>descrição bem grande e alongada pra testes hehehe</p>
        <div className="btn">
          <button>Deletar</button>
          <button>Editar</button>
        </div>
        </div>
      </>
    );
  }

export default TaskItem;
