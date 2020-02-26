'use strict'

const Task = use('App/Models/Task')

class TaskController {
    async index({ response }){
        let tasks = await Task.all()

        return response.json(tasks)
    }

    async store({ request, response }) {
        const data = request .only(['title','description'])

        const task       = new Task()
        task.title       = data.title
        task.description = data.description

        await task.save()

        return response.status(201).json(task)
    }

    async show({ params, response}) {
        const task = await Task.find(params.id)

        return response.json(task)
    }

    async update({ params, request, response }) {
        const data = request.only(['title','description'])

        const task = await Task.find(params.id)
        if(!task) {
            return response.status(404).json({ data:"Data not found" })
        }

        if(data.title) {
            task.title = data.title   
        }
        if(data.description) {
            task.description = data.description
        }
        
        await task.save()
        return response.status(200).json(task)
    }

    async delete({ params, response }) {
        const task = await Task.find(params.id)
        if(!task){
            return response.status(404).json({ data:"Data not found" })
        }
        await task.delete()

        return response.status(204).json(null)
    }

}

module.exports = TaskController
