
    // export const setUser = async ({commit }, user ) => {

    //     commit('setUserM', user )

    // }

export const createTaskAction = async ({commit}, task ) => {
    commit('createTask', task)
}


