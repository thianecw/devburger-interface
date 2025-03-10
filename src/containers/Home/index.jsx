import { CategoriesCarousel, Header, OffersCarousel } from '../../components';
import { Container, Banner } from './styles';
import { useUser } from '../../hooks/UserContext';

export function Home() {
	return (
		<main>
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
