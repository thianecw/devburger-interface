import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';
import { api } from '../../../services/api';
import { useCart } from '../../../hooks/CartContext';
import { toast } from 'react-toastify';
import { BackButton } from '../../BackButton'; // Caminho correto

export default function CheckoutForm() {
	const { cartProducts, clearCart } = useCart();
	const navigate = useNavigate();
	const stripe = useStripe();
	const elements = useElements();
	const {
		state: { dpmCheckerLink },
	} = useLocation();

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			console.error('Stripe ou eletementos com falha, tente novamente');
			return;
		}

		setIsLoading(true);

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			redirect: 'if_required',
		});

		if (error) {
			setMessage(error.message);
			toast.error('Ops, algo deu errado. Tente novamente.');
		} else if (paymentIntent && paymentIntent.status === 'succeeded') {
			try {
				const products = cartProducts.map((product) => {
					return {
						id: product.id,
						quantity: product.quantity,
						price: product.price,
					};
				});

				const { status } = await api.post(
					'/orders',
					{ products },
					{
						validateStatus: () => true,
					},
				);

				if (status === 200 || status === 201) {
					setTimeout(() => {
						navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
						clearCart();
					}, 2000);
					toast.success('Pedido efetuado com sucesso 👌');
				} else if (status === 400 || status === 409) {
					toast.error('Falha ao realizar seu pedido 😢');
				} else {
					throw new Error();
				}
			} catch (error) {
				toast.error('Erro no sistema. Tente novamente 🔌');
			}
		} else {
			navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: 'accordion',
	};

	return (
		<div className="container">
			<h1 className="title-checkout"> Pagamento </h1>
			<form id="payment-form" onSubmit={handleSubmit}>
				<PaymentElement id="payment-element" options={paymentElementOptions} />
				<button className="button" disabled={isLoading || !stripe || !elements} id="submit">
					<span id="button-text">
						{isLoading ? <div className="spinner" id="spinner"></div> : 'Pagar agora'}
					</span>
				</button>
				{message && <div id="payment-message">{message}</div>}
			</form>
			<BackButton
				onClick={() => {
					navigate({
						pathname: '/carrinho',
					});
				}}
			>
				&lt; Voltar
			</BackButton>
		</div>
	);
}
