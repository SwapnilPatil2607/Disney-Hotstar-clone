import {reducer} from "./Login_Reducer"
import {searched} from "./Search_Reducer"
import {applyMiddleware,combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
const rootReducer=combineReducers({login:reducer,search:searched})
export const store=createStore(rootReducer,applyMiddleware(thunk))