import PropTypes from 'prop-types';
import { Container, CardImage } from '../CardProduct/styles';

export function CardProduct({ product }) {
	console.log(product);
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p> {product.name}</p>
				<strong> {product.price} </strong>
			</div>
			{/* <CardButton></CardButton> */}
		</Container>
	);
}

CardProduct.propTypes = {
	product: PropTypes.object,
};
