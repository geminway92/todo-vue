import authApi from "@/api/authApi"


export const createUser = async ({commit }, user) => {

    const { name, email, password, photoProfile} = user

    try {
        const { data } = await authApi.post(':signUp', {email, password, returnSecureToken: true })
        const { idToken, refreshToken } = data

        await authApi.post(':update', { displayName: name , idToken, photoUrl: photoProfile  })
        
        console.log(data)

        
        delete user.password
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true}

    } catch (error) {
        const messageError = error.response.data.error.errors[0].message

        return { ok: false, message: messageError}

    }
}

export const signInUser = async ({commit }, user) => {

    const { email, password } = user

    try {
        const { data } = await authApi.post(':signInWithPassword', {email, password, returnSecureToken: true })
        const { displayName, idToken, refreshToken } = data
        user.name = displayName

        console.log(data)
        delete user.password
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true}

    } catch (error) {
        const messageError = error.response.data.error.errors[0].message

        return { ok: false, message: messageError}

    }
}

export const checkAuth = async ({commit}) => {

    const idToken      = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if( !idToken ){
        commit('logout')
        return { ok: false, message: 'No hay token'} /*comprobar si en el método está el SWAL */
    }

    try{
        const { data } = await authApi.post(':lookup', { idToken })
        console.log(data.users[0])
        const { displayName, email, photoUrl } = data.users[0]

        const user = {
            name: displayName,
            email,
            photoProfile: photoUrl
        }

        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }

    }catch (error){
        const messageError = error.response.data.error.errors.message
        commit('logout')
        
        return { ok:false, message: messageError }
    }
}


