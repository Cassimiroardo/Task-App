import { api } from './api'

export const index = _ => {
    return api.get('/tasks')
              .then( response => {
                  return response.data
              })
              .catch( err => {
                  console.log('erro: '+err)
              })
}

export const store = newTask => {
    return api.post('/task')
              .then(response => {
                console.log('registred!')
              })
}

