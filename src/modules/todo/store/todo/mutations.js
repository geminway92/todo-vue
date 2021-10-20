


export const load = (state, task) => {
    state.tasks = task
    localStorage.setItem('tasks',JSON.stringify(state.tasks))

}

export const createTask = (state, newTask) => {
    state.tasks.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))

}

export const updateTask = (state, payload) => {
    state.tasks = payload
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
}

export const deleteTask = (state, payload) => {
    console.log(payload)
    const resp = payload.filter(item => item.completed !== true)
    console.log(resp)
    state.tasks = resp
    localStorage.setItem('tasks', JSON.stringify(state.tasks))

}