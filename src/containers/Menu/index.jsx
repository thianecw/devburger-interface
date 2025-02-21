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

	//pegando as categorias da API//
	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');

			setCategories(data);
		}

		//pegando os produtos da API//
		//data vem da API com todos os produtos//

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
	}, []);

	useEffect(() => {
		// Filtra os produtos pela categoria ativa
		const newFilteredProducts = products.filter(
			(product) => product.category_id === activeCategory,
		);

		setFilteredProducts(newFilteredProducts);
	}, [products, activeCategory]);

	return (
		<main>
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
