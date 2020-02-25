import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333/api'
})

export const store = newTask => {
    return api.post('/task')
              .then(response => {
                console.log('registred!')
              })
}