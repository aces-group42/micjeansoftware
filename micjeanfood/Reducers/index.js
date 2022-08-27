import { combineReducers } from "redux";
const cartItems=[]
const extrasItem=[]

const cartReducer = (state=cartItems,action)=>{
    switch (action.type) {
        case "ADD":
            return [action.payLoad,...state]
        default:
            return state;
    }
}
const extrasReducer = (state=extrasItem,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

const allReducers = combineReducers({
    cartReducer,
    extrasReducer
})



export default allReducers;