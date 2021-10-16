
export const loginUser = ( state, { user, idToken, refreshToken }) => {
    
    if( idToken ){
        localStorage.setItem('idToken', idToken )
        state.idToken = idToken
    }

    if ( refreshToken ){
        localStorage.setItem('refreshToken', refreshToken )
        state.idToken = refreshToken
    }

    state.user = user
    state.status = 'authenticated'

    
} 
