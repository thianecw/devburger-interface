import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { Container, Content, Footer, Banner } from './styles';

export function Home() {
	return (
		<main>
			<Banner></Banner>

			<Container>
				<Content>
					<CategoriesCarousel />
					<div> Carrocel Produtos </div>
				</Content>
			</Container>

			<Footer> Desenvolvido por Thiane Wosniak </Footer>
		</main>
	);
}
