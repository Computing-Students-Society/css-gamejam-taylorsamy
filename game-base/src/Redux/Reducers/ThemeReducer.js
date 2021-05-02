import { THEMES, getTheme } from './../../Util/ThemeProvider';
const initialState = {
	theme: THEMES.DARK,
};

const ThemeReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SET_THEME':
            let newTheme = getTheme(action)
			return {
                ...state,
                theme: newTheme
            }
        default:
            return state;
    }
};

export default ThemeReducer;