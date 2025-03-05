import { SignOut } from '@phosphor-icons/react/dist/ssr';
import Logo from '../../assets/logo.svg';
import { navLinks } from './navLinks';
import { useUser } from '../../hooks/UserContext';
import { Container, NavLink, Footer, NavLinkContainer } from './styles';

export function SideNavAdmin() {
	const { logout } = useUser();

	return (
		<Container>
			<h2>SideNavAdmin</h2>
			<img src={Logo} alt="devburger logo" />
			<NavLinkContainer>
				{navLinks.map((link) => (
					<NavLink key={link.id} to={link.path}>
						<span> {link.label}</span>
						{/* {link.icon} */}
					</NavLink>
				))}
			</NavLinkContainer>
			<Footer>
				<NavLink to="/login" onClick={logout}>
					NAO TÁ FUNCIONANDO
					<SignOut /> <span> Sair</span>
				</NavLink>
			</Footer>
		</Container>
	);
}
