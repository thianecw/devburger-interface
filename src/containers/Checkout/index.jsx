import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import stripePromise from '../../config/stripeConfig';
import CheckoutForm from '../../components/Stripe/CheckoutForm';

export function Checkout() {
	const {
		state: { clientSecret },
	} = useLocation();

	if (!clientSecret) {
		return <div> Ops, algo deu errado. Tente novamente.</div>;
	}

	return (
		<Elements stripe={stripePromise} options={{ clientSecret }}>
			<CheckoutForm> Finalizar pedido</CheckoutForm>
		</Elements>
	);
}
