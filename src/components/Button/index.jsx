import { ContainerButton } from './styles';

export function Button({ children, ...props }) {
	console.log(props);
	return <ContainerButton {...props}> {children} </ContainerButton>;
}
