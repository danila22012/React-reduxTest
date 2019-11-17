const initialState = {
    data:[],


}


    
export default (state = initialState, action)  => {
    

    switch (action.type){
        case 'SET_POST':
            return {
                ...state, //пересоздаёт обьект с новым постс, чтоб ключи не затирались

                data: action.post,
            }
        default: return state;
    }
}