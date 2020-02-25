import React,{ Component } from 'react'
import './style.css'

class Register extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <>
                <div className="container">
                    <h2>Qual a tarefa?</h2>
                        <form className="container">
                            <input type="text" placeholder="Titulo"/>
                                <textarea type="text" placeholder="Descrição"/>
                            <button type="submit">Registrar</button>
                        </form>
                </div>
            </>
        )
    }
}

export default Register