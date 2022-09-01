
export const addItem=(item)=>{
    return{
        type:"ADD",
        payLoad:item
    }
}


export const increaseItem=(item)=>{
    return{
        type:"INCREASE",
        payLoad:item
    }
}

export const decreaseItem=(item)=>{
    return{
        type:"DECREASE",
        payLoad:item
    }
}

export const deleteItem=(item)=>{
    return{
        type:"DELETE",
        payLoad:item
    }
}
