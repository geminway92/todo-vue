


export const load = (state, task) => {
    state.tasks = task
    localStorage.setItem('tasks',JSON.stringify(state.tasks))

}

export const createTask = (state, newTask) => {
    state.tasks.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))

}

export const updateTask = (state, payload) => {
    state.tasks = state.tasks.map(item => item.id === payload.id)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
}

export const deleteTask = (state, task) => {
    state.tareas = state.tareas.filter(item => item.id !== task )
    localStorage.setItem('tasks', JSON.stringify(state.tasks))

   return state.tasks.push(task)
}