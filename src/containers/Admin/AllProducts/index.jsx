import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Container, EditButton } from './styles';
import { priceFormat } from '../../../utils/priceFormat';
import { categoryOptions } from './categoryOptions';
import { Filter, FilterOptions } from './styles';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductImg } from './styles';
import { CheckCircle, Pencil, XCircle, Trash } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function AllProducts() {
	const [allProducts, setAllProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [activeCategory, setActiveCategory] = useState(0);
	const categoryOrder = ['ENTRADAS', 'HAMBÚRGUERES', 'SOBREMESAS', 'BEBIDAS'];

	const navigate = useNavigate();

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');
			console.log(data);

			setAllProducts(data);
			setFilteredProducts(data);
		}

		loadProducts();
	}, []);

	function handleCategory(category) {
		if (category.value === 'ALL') {
			const sortedProducts = [...allProducts].sort((a, b) => {
				const categoryA = a.category.name.toUpperCase();
				const categoryB = b.category.name.toUpperCase();
				return categoryOrder.indexOf(categoryA) - categoryOrder.indexOf(categoryB);
			});
			setFilteredProducts(sortedProducts);
		} else {
			const newFiltered = allProducts.filter(
				(product) => product.category.name.toUpperCase() === category.value,
			);
			setFilteredProducts(newFiltered);
		}
		setActiveCategory(category.id);
	}

	function isOffer(sale) {
		if (sale) {
			return <CheckCircle color="#61A120" size={30} />;
		} else {
			return <XCircle color="#FF3205" size={30} />;
		}
	}

	function editProduct(product) {
		navigate('/admin/editar-produto', { state: { product } });
	}

	function deleteProduct(productId) {
		api
			.delete(`/products/${productId}`)

			.then(() => {
				const updatedProducts = allProducts.filter((product) => product.id !== productId);
				setAllProducts(updatedProducts);
				setFilteredProducts(updatedProducts);
				toast.success('Produto excluído com sucesso! 🎉', {
					autoClose: 1500,
				});
			})

			.catch((error) => {
				console.error('Erro ao excluir o produto:', error);
				toast.error('Falha ao excluir o produto. Tente novamente. ❌', {
					autoClose: 1500,
				});
			});
	}

	return (
		<Container>
			<Filter>
				{categoryOptions.map((category) => (
					<FilterOptions
						key={category.id}
						onClick={() => handleCategory(category)}
						$isActiveStatus={activeCategory === category.id}
					>
						{category.label}
					</FilterOptions>
				))}
			</Filter>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell
								align="center"
								sx={{
									width: '200px',
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
									width: '100px',
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
									width: '150px',
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
									width: '50px',
									fontWeight: 600,
									fontSize: '16px',
									backgroundColor: '#363636',
									color: 'white',
								}}
							>
								Imagem
							</TableCell>
							<TableCell
								align="center"
								sx={{
									width: '50px',
									fontSize: '16px',
									fontWeight: 600,
									backgroundColor: '#363636',
									color: 'white',
								}}
							>
								Editar
							</TableCell>
							<TableCell
								align="center"
								sx={{
									width: '50px',
									fontSize: '16px',
									fontWeight: 600,
									backgroundColor: '#363636',
									color: 'white',
								}}
							>
								Excluir
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredProducts.map((product) => (
							<TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component="th" scope="row" sx={{ textAlign: 'center' }}>
									{product.name}
								</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>{priceFormat(product.price)}</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>{isOffer(product.sale)}</TableCell>
								<TableCell
									align="center"
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<ProductImg src={product.url} />
								</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>
									<EditButton onClick={() => editProduct(product)}>
										<Pencil size={32} />
									</EditButton>
								</TableCell>
								<TableCell sx={{ textAlign: 'center' }}>
									<EditButton onClick={() => deleteProduct(product.id)}>
										<Trash size={32} />
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
