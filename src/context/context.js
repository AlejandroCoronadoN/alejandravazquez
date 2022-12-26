import React, { useReducer, useState } from 'react';
import { initialState, AuthReducer, contentState } from './reducer';

export const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();
const ContentStateContext = React.createContext();

export function useAuthState() {
	const context = React.useContext(AuthStateContext);
	if (context === undefined) {
		throw new Error('useAuthState must be used within a GlobalState');
	}
	return context;
}

export function useContentState() {
	const context = React.useContext(ContentStateContext);
	if (context === undefined) {
		throw new Error('ContentStateContext must be used within a GlobalState');
	}
	return context;
}

export function useAuthDispatch() {
	const context = React.useContext(AuthDispatchContext);
	if (context === undefined) {
		throw new Error('useAuthDispatch must be used within a GlobalState');
	}

	return context;
}

export const GlobalState = ({ children }) => {
	const [initalState, dispatch] = useReducer(AuthReducer, initialState);
	const [content, dispatchContent] = useState(contentState);

	return (
    <ContentStateContext.Provider value={content}>
      <AuthStateContext.Provider value={initalState}> 
        <AuthDispatchContext.Provider value={dispatch}>
          {children}
        </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
    </ContentStateContext.Provider>
	);
};
