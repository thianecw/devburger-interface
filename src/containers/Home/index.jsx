import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Container, Banner } from './styles';
import { useUser } from '../../hooks/UserContext';
import { Header } from '../../components/Header';

export function Home() {
	return (
		<main>
			<Header> </Header>
			<Banner></Banner>
			<Container>
				<div>
					<CategoriesCarousel />
					<OffersCarousel />
				</div>
			</Container>
		</main>
	);
}
