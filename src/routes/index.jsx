import { createBrowserRouter } from 'react-router-dom';
import { Cart, Home, Login, Menu, Register } from '../containers';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},

	{
		path: '/login',
		element: <Login />,
	},

	{
		path: '/cadastro',
		element: <Register />,
	},

	{
		path: '/cardapio',
		element: <Menu />,
	},
	{
		path: '/carrinho',
		element: <Cart />,
	},
]);
