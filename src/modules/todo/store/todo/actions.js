import authApi from '@/api/authApi'


export const loadLocalStorage = async ({commit} ) =>{
    try{
        if(localStorage.getItem('tasks')){
            const tasks = JSON.parse(localStorage.getItem('tasks'))
            commit('load', tasks)
            return
        }
    } catch(error){
        console.log('error', error)
    }

    localStorage.setItem('tasks', JSON.stringify([]))
}

export const updateTaskLocalStorage = ({commit}, tasks) => {
    commit('updateTask',tasks)
}

export const createTaskAction = async ({commit}, task ) => {

    commit('createTask', task)
}

export const deleteTaskAction = async ({commit}, tasks) => {
    commit('deleteTask', tasks)
}

export const updateNewPhotoProfile = async ({commit}, data) => {
  const idToken =  localStorage.getItem('idToken')
    const { photoProfile} = data
    const resp = await authApi.post(':update', {  idToken, photoUrl: photoProfile  })
    console.log(resp)
}
