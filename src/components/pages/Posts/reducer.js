const initialState = {

    list:[],

}




export default ( state = initialState, action ) => {

    switch ( action.type ) {
        case 'SET_POSTS':
            
            return {
                ...state, //пересоздаёт обьект с новым постс
                list: action.posts, 
                
            }
    
        default:
        return state;  
    }
}
