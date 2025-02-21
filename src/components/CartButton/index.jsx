import Cart from '../../assets/cart-btn.svg';
import { ContainerButton } from './style';

export function CartButton({ ...props }) {
	return (
		<ContainerButton>
			<img src={Cart} alt="cart-button" />
		</ContainerButton>
	);
}
