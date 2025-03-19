import { SignOut } from '@phosphor-icons/react/dist/ssr';
import Logo from '../../assets/logo.svg';
import { navLinks } from './navLinks';
import { useUser } from '../../hooks/UserContext';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';
import { useResolvedPath } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

export function SideNavAdmin() {
	const { logout } = useUser();
	const location = useLocation();

	const { pathname } = location;

	return (
		<Container>
			<img src={Logo} alt="logo" />
			<h1> GERENCIAMENTO </h1>
			<NavLinkContainer>
				{navLinks.map((link) => (
					<NavLink key={link.id} to={link.path} $isActive={pathname === link.path}>
						{link.icon && <link.icon />}
						<span> {link.label}</span>
					</NavLink>
				))}
			</NavLinkContainer>

			<Footer>
				<NavLink to="/login" onClick={logout}>
					<SignOut /> <span> Sair</span>
				</NavLink>
			</Footer>
		</Container>
	);
}
