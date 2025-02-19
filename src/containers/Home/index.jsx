import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Container, Content, Footer, Banner } from './styles';

export function Home() {
	return (
		<main>
			<Banner></Banner>

			<Container>
				<Content>
					<CategoriesCarousel />
					<OffersCarousel />
				</Content>
			</Container>
		</main>
	);
}
