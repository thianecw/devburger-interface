import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Container, Form, InputContainer, LeftContainer, RigthContainer, Title } from './styles';

//documentação react hook form//
export function Login() {
	const schema = yup
		.object({
			email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
			password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Insira sua senha'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);

	const onSubmit = async (data) => {
		const response = await toast.promise(
			api.post('/session', {
				email: data.email,
				password: data.password,
			}),

			{
				pending: 'Verificando seus dados ⏳',
				success: 'Seja bem vindo(a) 👌',
				error: 'Verifique seu email ou senha 🤯',
			},
		);

		console.log(response);
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-dev-burger" />
			</LeftContainer>

			<RigthContainer>
				<Title>
					Olá, seja bem vindo ao <span> Dev Burguer!</span> <br />
					Acesse com seu <span>login e senha</span>
				</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label> E-mail</label>
						<input type="email" {...register('email')} />
						<p> {errors?.email?.message}</p>
					</InputContainer>

					<InputContainer>
						<label> Senha</label>
						<input type="password" {...register('password')} />
						<p> {errors?.password?.message}</p>
					</InputContainer>
					<Button type="submit"> Entrar</Button>
				</Form>
				<p>
					Não possui conta? <a>Clique aqui</a>
				</p>
			</RigthContainer>
		</Container>
	);
}
