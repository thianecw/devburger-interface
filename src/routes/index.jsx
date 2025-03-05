import { Route, Routes } from 'react-router-dom';
import {
	AllOrders,
	AllProducts,
	Cart,
	Checkout,
	CompletePage,
	EditProduct,
	Home,
	Login,
	Menu,
	NewProduct,
	Register,
} from '../containers';
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<UserLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/cardapio" element={<Menu />} />
				<Route path="/carrinho" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/complete" element={<CompletePage />} />
			</Route>

			<Route path="/admin" element={<AdminLayout />}>
				<Route path="/admin/pedidos" element={<AllOrders />} />
				<Route path="/admin/novo-produto" element={<NewProduct />} />
				<Route path="/admin/editar-produto" element={<EditProduct />} />
				<Route path="/admin/produtos" element={<AllProducts />} />
			</Route>

			<Route path="/login" element={<Login />} />
			<Route path="/cadastro" element={<Register />} />
		</Routes>
	);
}
