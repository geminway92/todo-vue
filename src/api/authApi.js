
import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAUOkjZUPpoM1Hf3d_R1edFjTMHo_OPlyY'
    }
})

export default authApi