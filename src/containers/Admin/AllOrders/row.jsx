import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { TableCell } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { formatDate } from '../../../utils/formatDate';
import { ProductImg, SelectStatus } from './styles';
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../services/api';
import { priceFormat } from '../../../utils/priceFormat';

export function Row({ row, setOrders, orders }) {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	async function newStatusOrder(id, status) {
		try {
			setLoading(true);
			await api.put(`orders/${id}`, { status });

			//pegando item por item, pegando o item que vai ser alterado o status pra alterar//
			const newOrders = orders.map((order) => (order._id === id ? { ...order, status } : order));

			setOrders(newOrders);
		} catch (err) {
			toast.error('Ops, algo deu errado. Tente novamente ⚠️', {
				position: 'top-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.orderId}
				</TableCell>
				<TableCell>{row.name}</TableCell>
				<TableCell>{formatDate(row.date)}</TableCell>
				<TableCell>
					<SelectStatus
						options={orderStatusOptions.filter((status) => status.id !== 0)}
						placeholder="Status"
						menuPortalTarget={document.body}
						defaultValue={orderStatusOptions.find((status) => status.value === row.status || null)}
						onChange={(status) => newStatusOrder(row.orderId, status.value)}
						isLoading={loading}
					/>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					{/*parte de dentro da tabela HEAD*/}
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell sx={{ fontWeight: 700 }}>Produto</TableCell>
										<TableCell sx={{ fontWeight: 700 }}>Quantidade</TableCell>
										<TableCell sx={{ fontWeight: 700 }}>Total</TableCell>
										<TableCell sx={{ fontWeight: 700 }}>Imagem do produto</TableCell>
									</TableRow>
								</TableHead>
								{/*parte de dentro da tabela BODY*/}
								<TableBody>
									{row.products.map((product) => (
										<TableRow key={product.id}>
											<TableCell>{product.name}</TableCell>
											<TableCell component="th" scope="row">
												{product.id}
											</TableCell>
											<TableCell>{priceFormat(product.price * product.quantity)}</TableCell>
											<TableCell>
												<ProductImg src={product.url} alt={`{product.name}`} />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

Row.propTypes = {
	orders: PropTypes.array.isRequired,
	setOrders: PropTypes.func.isRequired,
	row: PropTypes.shape({
		orderId: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		products: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				category: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				quantity: PropTypes.number.isRequired,
				url: PropTypes.string.isRequired,
			}),
		).isRequired,
		status: PropTypes.string.isRequired,
	}).isRequired,
};
