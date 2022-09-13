export const initialState = {
	token: null,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TOKEN':
			return {
				...state,
				token: action.payload,
			};
		case 'REMOVE_TOKEN': {
			return {
				...state,
				token: null,
			};
		}
		default: {
			return state;
		}
	}
};
