import {createStore, combineReducers, applyMiddleware } from 'redux'
import  thunk  from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import  { productReducer }  from "./reducer/productReducer"


const reducer = combineReducers({
    product:productReducer

})

const initialState = {}

const middleware = [thunk]    

const Store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default Store