import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({}); //valor inicial objeto vazio//

export const UserProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({});

	// Função para salvar dados do usuário no estado e localStorage
	const putUserData = (userInfo) => {
		setUserInfo(userInfo);
		localStorage.setItem('devburger:userData', JSON.stringify(userInfo));
	};

	const logout = () => {
		setUserInfo({});
		localStorage.removeItem('devburger:userData');
	};

	//MANTENDO O USER INFO ATUALIZADO//
	useEffect(() => {
		const userInfoLocalStorage = localStorage.getItem('devburger:userData');

		if (userInfoLocalStorage) {
			setUserInfo(JSON.parse(userInfoLocalStorage));
		}
	}, []);

	return (
		<UserContext.Provider value={{ userInfo, putUserData, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be a valid context');
	}

	return context;
};
