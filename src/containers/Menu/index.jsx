import { useEffect, useState } from 'react';
import {
	Banner,
	BackButton,
	BackButtonContainer,
	CategoryButton,
	Container,
	MenuCategories,
	ProductsContainer,
} from './styles';
import { api } from '../../services/api';
import { priceFormat } from '../../utils/priceFormat';
import { CardProduct } from '../../components/CardProduct';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]); //produtos filtrados por categoria//

	const navigate = useNavigate();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);

	const [activeCategory, setActiveCategory] = useState(() => {
		const categoryId = +queryParams.get('categoria');

		if (categoryId) {
			return categoryId;
		}
		return 0;
	});

	// Carregar categorias e produtos da API
	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');
			setCategories(data);

			const categoryId = +queryParams.get('categoria');
			if (categoryId) {
				setActiveCategory(categoryId); // Seleciona a categoria da URL
			} else if (data.length > 0) {
				setActiveCategory(data[0].id); // Se não houver categoria na URL, seleciona a primeira
			}
		}
		async function loadProducts() {
			const { data } = await api.get('/products');
			const allProducts = data.map((product) => ({
				formatedPrice: priceFormat(product.price),
				...product,
			}));
			setProducts(allProducts);
		}

		loadCategories();
		loadProducts();
	}, [search]); // Carregar novamente caso a URL mude

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredProducts(products); // Se categoria 0 (todas), mostra todos os produtos
		} else {
			const filtered = products.filter((product) => product.category_id === activeCategory);
			setFilteredProducts(filtered);
		}
	}, [activeCategory, products]); // Refiltra sempre que a categoria ou os produtos mudarem

	return (
		<main>
			<Header> </Header>
			<Banner>
				<h1>
					O melhor
					<br />
					hamburger
					<br />
					está aqui
					<span> Esse cardápio está irrestível!</span>
				</h1>
			</Banner>

			<Container>
				<MenuCategories>
					{categories.map((category) => (
						<CategoryButton
							key={category.id}
							$isActive={category.id === activeCategory}
							onClick={() => {
								navigate(
									{
										pathname: '/cardapio',
										search: `?categoria=${category.id}`,
									},
									{
										replace: true,
									},
								);

								setActiveCategory(category.id);
							}}
						>
							{category.name}
						</CategoryButton>
					))}
				</MenuCategories>

				<ProductsContainer>
					{filteredProducts.map((product) => (
						<CardProduct product={product} key={product.id} />
					))}
				</ProductsContainer>

				<BackButtonContainer>
					<BackButton
						onClick={() => {
							navigate({
								pathname: '/',
							});
						}}
					>
						{' '}
						&lt; Voltar
					</BackButton>
				</BackButtonContainer>
			</Container>
		</main>
	);
}
