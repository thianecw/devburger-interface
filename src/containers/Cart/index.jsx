import Logo from '../../assets/logo.svg';
import BgCart from '../../assets/bg-cart.svg';
import { Banner, Container, Content, Title } from './styles';
import { CartItems } from '../../components/CartItems';
import { BackButton, BackButtonContainer } from '../Menu/styles';
import { useNavigate } from 'react-router-dom';
import { CartResume } from '../../components/CartResume';

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

			<BackButtonContainer>
				<BackButton
					onClick={() => {
						navigate({
							pathname: '/cardapio',
						});
					}}
				>
					&lt; Voltar
				</BackButton>
			</BackButtonContainer>
		</Container>
	);
}
