import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import {
	Container,
	Content,
	HeaderLink,
	LinkContainer,
	Navigation,
	Options,
	Profile,
} from './styles';

import { Link as RouterLink } from 'react-router-dom';
import { Basket, User, SignOut } from '@phosphor-icons/react';
import { Navigate } from 'react-router-dom';

export function Header() {
	const navigate = useNavigate();
	const { logout, userInfo } = useUser();
	const { pathname } = useResolvedPath();

	// Função de logout
	function logoutUser() {
		logout(); // Limpa o estado de autenticação

		setTimeout(() => {
			navigate('/login'); // Navega para a página de login após o logout
		}, 100); // Espera 100ms antes de navegar
	}

	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink to="/" $isActive={pathname === '/'}>
							Home
						</HeaderLink>
						<hr />
						<HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
							Cardápio
						</HeaderLink>
					</div>
				</Navigation>

				<Options>
					<Profile>
						<User color="#ffff" size={24} />
						<div>
							<p>
								Olá, <span> {userInfo.name} </span>
							</p>
						</div>
					</Profile>
					<LinkContainer>
						<LinkContainer>
							<RouterLink to="/carrinho">
								<Basket color="#ffff" size={28} />
							</RouterLink>
							<button onClick={logoutUser}>
								<SignOut color="#ffff" size={28} />
							</button>
						</LinkContainer>
					</LinkContainer>
				</Options>
			</Content>
		</Container>
	);
}
