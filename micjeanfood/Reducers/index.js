import { combineReducers } from "redux";
const cartItems=[]
const extrasItem=[]

const cartReducer = (state=cartItems,action)=>{
    switch (action.type) {
        case "ADD":
            for(let i=0;i<state.length;i++){
                if(state[i]._id===action.payLoad._id){
                    return state;
                }
            }
            //Creating a new field
            action.payLoad.amount=1;
            return [action.payLoad,...state]

        case "DELETE":
            return state.filter(item=>item._id!=action.payLoad._id)

        case "INCREASE":
            const clone=[...state]
            const index = clone.findIndex(item=>item._id===action.payLoad._id)
            clone[index].amount=clone[index].amount+1
            return [...clone]

        case "DECREASE":
            const cloned2 = [...state]
            const index2 = cloned2.findIndex(item=>item._id===action.payLoad._id)
            if(cloned2[index2].amount>1){
                cloned2[index2].amount=cloned2[index2].amount-1
            }
            return [...cloned2]

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