import Logo from '../../assets/logo.svg';
import BgCart from '../../assets/bg-cart.svg';
import { Banner, Container, Content, Title } from './styles';
import { CartItems } from '../../components/CartItems';
import { useNavigate } from 'react-router-dom';
import { CartResume } from '../../components/CartResume';
import { BackButton } from '../../components/BackButton';

export function Cart() {
	const navigate = useNavigate();

	return (
		<Container>
			<Banner style={{ backgroundImage: `url(${BgCart})` }}>
				<img src={Logo} alt="Logo" />
			</Banner>
			<Title> Checkout </Title>
			<Content>
				<CartItems />
				<CartResume />
			</Content>

			<BackButton
				onClick={() => {
					navigate({
						pathname: '/cardapio',
					});
				}}
			>
				&lt; Voltar
			</BackButton>
		</Container>
	);
}
