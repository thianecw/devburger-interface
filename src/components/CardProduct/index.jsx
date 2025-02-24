import PropTypes from 'prop-types';
import { CartButton } from '../CartButton';
import { CardImage, Container } from './styles';
import { useCart } from '../../hooks/CartContext';

export function CardProduct({ product }) {
	//pegando a função de add produtos no carrinho pra usar ali no botão//
	const { addProduct } = useCart();
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong> {product.formatedPrice}</strong>
			</div>
			<CartButton onClick={() => addProduct(product)} />
		</Container>
	);
}

CardProduct.propTypes = {
	products: PropTypes.object,
};
