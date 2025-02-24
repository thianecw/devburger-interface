import Logo from '../../assets/logo.svg';
import BgCart from '../../assets/bg-cart.svg';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
	return (
		<Container>
			<Banner style={{ backgroundImage: `url(${BgCart})` }}>
				<img src={Logo} alt="Logo" />
			</Banner>
			<Title> Checkout </Title>
			<Content>
				{/* <CartItems></CartItems> 
                <CartResume></CartResume> */}
			</Content>

			<div>
				<h1> . </h1>
			</div>
		</Container>
	);
}
