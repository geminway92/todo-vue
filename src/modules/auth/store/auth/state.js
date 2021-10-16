
export default () => ({
    status: 'authenticating', // 'authenthicated', 'not-authenticated', 'authenthicating'
    user: {
        id:  '',
        name: '',
        email: '',
        password: null ,
        todolist: {
            id: '',
            todo: '',
        },
    },
    idToken: null,
    refreshToken: null,
    

})

