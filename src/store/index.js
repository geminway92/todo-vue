import { createStore } from 'vuex'

import todo from '../modules/todo/store/todo'

const store = createStore({

    modules: {
        todo,
    }

})

export default store