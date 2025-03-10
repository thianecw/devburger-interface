import { ContainerBackButton } from './styles';

export function BackButton({ children, ...props }) {
	return <ContainerBackButton {...props}> {children} </ContainerBackButton>;
}
