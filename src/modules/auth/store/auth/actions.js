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

    const { email, password} = user

    try {
        const { data } = await authApi.post(':signInWithPassword', {email, password, returnSecureToken: true })
        const { idToken, refreshToken } = data

        
        delete user.password
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true}

    } catch (error) {
        const messageError = error.response.data.error.errors[0].message

        return { ok: false, message: messageError}

    }
}