import { Container } from './styles';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { priceFormat } from '../../utils/priceFormat';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

export function CartResume() {
	const [finalPrice, setFinalPrice] = useState(0);
	const [deliveryTax] = useState(500);
	const navigate = useNavigate();

	const { cartProducts, clearCart } = useCart();

	useEffect(() => {
		const sumAllItems = cartProducts.reduce((acc, current) => {
			return current.price * current.quantity + acc;
		}, 0);

		setFinalPrice(sumAllItems);
	}, [cartProducts]);

	//mandando os dados de order pro backend//
	const submitOrder = async () => {
		const products = cartProducts.map((product) => {
			return { id: product.id, quantity: product.quantity, price: product.price };
		});

		try {
			const { data } = await api.post('/create-payment-intent', { products });

			navigate('/checkout', {
				state: data,
			});
		} catch (err) {
			toast.error('Ops, algo deu errado. Tente novamente', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
		}
	};

	return (
		<div>
			<Container>
				<div className="container-top">
					<h2 className="title">Resumo do pedido</h2>
					<p className="items">Sua compra</p>
					<p className="items-price">{priceFormat(finalPrice)}</p>
					<p className="delivery">Taxa de entrega</p>
					<p className="delivery-tax"> {priceFormat(deliveryTax)}</p>
				</div>

				<div className="container-bottom">
					<p className="total">Total</p>
					<p className="totalprice">{priceFormat(finalPrice + deliveryTax)}</p>
				</div>
			</Container>

			<Button onClick={submitOrder} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px' }}>
				Finalizar pedido
			</Button>
		</div>
	);
}
