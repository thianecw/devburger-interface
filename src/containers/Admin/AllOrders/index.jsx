import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { Row } from './row';
import { Filter, FilterOptions } from './styles';
import { orderStatusOptions } from './orderStatus';

export function AllOrders() {
	const [orders, setOrders] = useState([]); //backup//
	const [filteredOrders, setFilteredOrders] = useState([]); //valores que estão na tela//
	const [rows, setRows] = useState([]);
	const [activeStatus, setActiveStatus] = useState(0);

	//chamando os dados da api//
	useEffect(() => {
		async function loadOrders() {
			const { data } = await api.get('orders');

			// Ordenando os pedidos pela data de criação (do mais recente para o mais antigo)
			const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

			setOrders(sortedOrders);
			setFilteredOrders(sortedOrders); // Define a lista filtrada também com os pedidos ordenados
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
		const newRows = filteredOrders.map((order) => createData(order));
		setRows(newRows);
	}, [filteredOrders]);

	function handleStatus(status) {
		if (status.id === 0) {
			setFilteredOrders(orders);
		} else {
			const newOrders = orders.filter((order) => order.status === status.value);

			setFilteredOrders(newOrders);
		}

		setActiveStatus(status.id);
	}

	useEffect(() => {
		if (activeStatus === 0) {
			setFilteredOrders(orders);
		} else {
			const statusIndex = orderStatusOptions.findIndex((item) => item.id === activeStatus);

			const newFilteredOrders = orders.filter(
				(order) => order.status === orderStatusOptions[statusIndex].value,
			);

			setFilteredOrders(newFilteredOrders);
		}
	}, [orders]);

	return (
		<>
			<Filter>
				{orderStatusOptions.map((status) => (
					<FilterOptions
						key={status.id}
						onClick={() => handleStatus(status)}
						$isActiveStatus={activeStatus === status.id}
					>
						{status.label}
					</FilterOptions>
				))}
			</Filter>

			<TableContainer component={Paper}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell
								sx={{
									fontWeight: 600,
									color: '#9758a6',
									fontSize: '16px',
									fontFamily: '"Poppins", sans-serif',
								}}
							>
								Pedido
							</TableCell>
							<TableCell
								sx={{
									fontWeight: 600,
									color: '#9758a6',
									fontSize: '16px',
									fontFamily: '"Poppins", sans-serif',
								}}
							>
								Cliente
							</TableCell>
							<TableCell
								sx={{
									fontWeight: 600,
									color: '#9758a6',
									fontSize: '16px',
									fontFamily: '"Poppins", sans-serif',
								}}
							>
								Data do pedido
							</TableCell>
							<TableCell
								sx={{
									fontWeight: 600,
									color: '#9758a6',
									fontSize: '16px',
									fontFamily: '"Poppins", sans-serif',
								}}
							>
								Status
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<Row key={row.orderId} row={row} orders={orders} setOrders={setOrders} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
