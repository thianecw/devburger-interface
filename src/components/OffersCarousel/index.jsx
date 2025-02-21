import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Title } from './styles';
import { CardProduct } from '../CardProduct';
import { priceFormat } from '../../utils/priceFormat';

export function OffersCarousel() {
	const [offers, setOffers] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');

			const onlyOffers = data
				.filter((product) => product.sale)
				.map((product) => ({
					formatedPrice: priceFormat(product.price),
					...product,
				}));

			setOffers(onlyOffers);
		}

		loadProducts();
	}, []);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 5,
		},
		tablet: {
			breakpoint: { max: 1280, min: 690 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 2,
		},
	};

	return (
		<Container>
			<Title> Ofertas do dia</Title>

			<Carousel
				responsive={responsive}
				infinite={true}
				partialVisbile={false}
				itemClass="carousel-item"
			>
				{offers.map((product) => {
					return <CardProduct key={product.id} product={product} />;
				})}
			</Carousel>
		</Container>
	);
}
