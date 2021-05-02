const initialState = {
	someVar: "Globally accessible"
};

const RootReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SOME_ACTION':
            return {
                ...state,
                someVar: action.newValue
            }
        default:
            return state;
    }
};

export default RootReducer;