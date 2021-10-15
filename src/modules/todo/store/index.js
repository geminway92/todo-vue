import { createStore } from 'vuex'
import todoStore from './todo'

export default createStore({


    modules: {
        todo: todoStore,
    }

})