export const initialState = {
	list: [],
	
};


const reducer = ( state, action ) => {
	
	switch( action.type ) {
		
		case 'ON_SUBMIT': 
		
				console.log(action.list,"reducer")
					return {
									...state,
									list: [...state.list,action.list]
								}
		default: return state;
	} 
}

export default reducer;