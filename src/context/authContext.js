import {
	createContext,
	useReducer,
	useContext,
	useMemo,
	useEffect,
} from 'react';
import { useLocation, useNavigate } from 'react-router';
import { reducer, initialState } from './reducer';

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
	const path = useLocation().pathname;
	const navigate = useNavigate();
	const restrictedPaths = useMemo(
		() => ['/admin/projects', '/admin/add-project'],
		[]
	);

	useEffect(() => {
		if (restrictedPaths.includes(path)) {
			const token = localStorage.getItem('ace-bridge-accessToken');
			if (!token) {
				navigate('/admin');
			}
		}
	}, [navigate, path, restrictedPaths]);

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

export const useAuthContext = () => useContext(Context);
