import PropTypes from 'prop-types';
import { CartButton } from '../CartButton';
import { CardImage, Container } from './styles';

export function CardProduct({ product }) {
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong> {product.formatedPrice}</strong>
			</div>
			<CartButton />
		</Container>
	);
}

CardProduct.propTypes = {
	products: PropTypes.object,
};
