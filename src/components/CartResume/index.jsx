import { Button } from '../Button';
import { Container } from './styles';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { priceFormat } from '../../utils/priceFormat';
import { useNavigate } from 'react-router-dom';

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
			return { id: product.id, quantity: product.quantity };
		});

		//exibindo o status da solicitação//
		try {
			const { status } = await api.post(
				'/orders',
				{ products },
				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				setTimeout(() => {}, 2000);
				navigate('/');
				toast.success('Pedido efetuado com sucesso 👌');
				clearCart();
			} else if (status === 400 || status === 409) {
				toast.error('Falha ao realizar seu pedido 😢');
			} else {
				throw new Error();
			}
		} catch (error) {
			toast.error('Erro no sistema. Tente novamente 🔌');
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
