const MAX_HEALTH = 1000;

const initialState = {
	health: 100
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_USER_HEALTH':
			let newHealth = state.health + action.health;
			if(newHealth > MAX_HEALTH){
				newHealth = MAX_HEALTH
			}
			return {
                ...state,
                health: newHealth
            }
        default:
            return state;
    }
};

export default UserReducer;