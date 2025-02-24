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

export function Header() {
	const navigate = useNavigate();
	const { logout, userInfo } = useUser();
	const { pathname } = useResolvedPath();

	function logoutUser() {
		logout();
		navigate('/login');
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
