import {reducer} from "./Login_Reducer"
import {searched} from "./Search_Reducer"
import {hero} from "./Hero_Reducer"
import {watch_later} from "./Watch_Later_Reducer"
import {applyMiddleware,combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
const rootReducer=combineReducers({watch_later_data:watch_later,herodata:hero,login:reducer,search:searched})
export const store=createStore(rootReducer,applyMiddleware(thunk))