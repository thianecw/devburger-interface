import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';

export function AllOrders() {
	const [orders, setOrders] = useState([]);
	const [rows, setRows] = useState([]);

	//chamando os dados da api//
	useEffect(() => {
		async function loadOrders() {
			const { data } = await api.get('orders');
			setOrders(data);
			console.log('Pedidos recebidos:', data);
		}
		loadOrders();
	}, []);

	function createData(order) {
		return {
			name: order.user.name,
			orderId: order._id,
			date: order.createdAt,
			status: order.status,
			products: order.products,
		};
	}

	useEffect(() => {
		const newRows = orders.map((order) => createData(order));
		setRows(newRows);
	}, [orders]);

	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Pedido</TableCell>
						<TableCell>Cliente</TableCell>
						<TableCell>Data do pedido</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.orderId}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell>{row.orderId}</TableCell>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.user}</TableCell>
							<TableCell>{row.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
