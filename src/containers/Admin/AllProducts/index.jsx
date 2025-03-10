import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Container, EditButton } from './styles';
import { priceFormat } from '../../../utils/priceFormat';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductImg } from './styles';
import { CheckCircle, Pencil, XCircle } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export function AllProducts() {
	const [allProducts, setAllProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');
			console.log(data);

			setAllProducts(data);
		}

		loadProducts();
	}, []);

	function isOffer(sale) {
		if (sale) {
			return <CheckCircle color="#61A120" size={30} />;
		} else {
			return <XCircle color="#FF3205" size={30} />;
		}
	}

	function editProduct(allProducts) {
		navigate('/admin/editar-produto', { state: { allProducts } });
	}

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell
								align="center"
								sx={{
									fontWeight: 600,
									fontSize: '16px',
									backgroundColor: '#363636',
									color: 'white',
								}}
							>
								Produtos
							</TableCell>
							<TableCell
								align="center"
								sx={{
									fontWeight: 600,
									fontSize: '16px',
									backgroundColor: '#363636',
									color: 'white',
								}}
							>
								Preço
							</TableCell>
							<TableCell
								align="center"
								sx={{
									fontWeight: 600,
									fontSize: '16px',
									backgroundColor: '#363636',
									color: 'white',
								}}
							>
								Produto em oferta
							</TableCell>
							<TableCell
								align="center"
								sx={{
									fontWeight: 600,
									fontSize: '16px',
									backgroundColor: '#363636',
									color: 'white',
								}}
							>
								Imagem do produto
							</TableCell>
							<TableCell
								align="center"
								sx={{ fontWeight: 700, backgroundColor: '#363636', color: 'white' }}
							>
								Editar
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{allProducts.map((product) => (
							<TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
									{product.name}
								</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>{priceFormat(product.price)}</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>{isOffer(product.sale)}</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>
									<ProductImg src={product.url} />
								</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>
									<EditButton onClick={() => editProduct(allProducts)}>
										<Pencil size={32} />
									</EditButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
