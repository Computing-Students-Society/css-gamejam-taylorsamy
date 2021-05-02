// TODO: Create a way to easily modify the "theme" of the app
// this should handle basic text color, background colors, border, etc. 
// components should allow for these to be overridden


// a list of theme names available to use.
const THEMES = {
	DARK: "DARK"
}

// Verifies the provided theme is one available in the themes list
// returns the theme or error
const getTheme = action => {
	if(!action.theme){
		return {}
	}
	if(!THEMES[action.theme]){
		console.warn("Invalid theme provided. ")
		return {}
	}

	return THEMES[action.theme]
}

module.exports = {
    THEMES,
	getTheme
};