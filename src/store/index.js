import { createStore } from 'vuex'

import todo from '../modules/todo/store/todo'
import auth from '../modules/auth/store/auth'

const store = createStore({

    modules: {
        todo,
        auth,
    }

})

export default store