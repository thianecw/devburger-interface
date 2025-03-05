import { Hamburger, Receipt, ListPlus } from '@phosphor-icons/react';

export const navLinks = [
	{
		id: 1,
		label: 'Pedidos',
		path: '/admin/pedidos',
		icon: Receipt,
	},

	{
		id: 2,
		label: 'Produtos',
		path: '/admin/produtos',
		icon: Hamburger,
	},

	{
		id: 3,
		label: 'Novo produto',
		path: '/admin/novo-produto',
		icon: ListPlus,
	},
];
