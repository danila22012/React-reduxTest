

const initialState = {
    lastPosts:[],


}


    
export default (state = initialState, action)  => {
    

    switch (action.type){
        case 'SET_LAST_POST':
            return {
                ...state, //пересоздаёт обьект с новым постс

                lastPosts: action.posts,
            }
        default: return state;
    }
}