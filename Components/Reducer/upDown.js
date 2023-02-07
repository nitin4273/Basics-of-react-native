// here we tell to actions how to perform actions or we can say that this is reducer
// setinitial state =0
const initialState ={count:0};
const changeTheNumber=(state=initialState,action)=>{
switch(action.type){
    case "INCREMENT" : return {...state,count : state.count + 1}
    case "DECREMENT" : return {...state,count : state.count - 1}
    default: return state;
}

}
export default changeTheNumber; 