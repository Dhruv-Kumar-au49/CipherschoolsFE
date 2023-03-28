import {configureStore} from '@reduxjs/toolkit'
import { phelaReducer } from './reducer'

let store = configureStore({

reducer:{

    first: phelaReducer,

}

})

export default store