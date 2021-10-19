


// export const setUserM = (state, user) => {
//     state.users.push(user)
// }

export const createTask = (state, task) => {
    localStorage.setItem('newTask',task)

   return state.tasks.push(task)
}

export const deleteTask = (state, task) => {
    localStorage.setItem('newTask',task)

   return state.tasks.push(task)
}