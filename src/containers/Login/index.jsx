import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, LeftContainer } from '../../components';
import { useUser } from '../../hooks/UserContext';

import Logo from '../../assets/logo.svg';
import { Container, Form, InputContainer, Link, RigthContainer, Title } from './styles';

//documentação react hook form//
export function Login() {
	const navigate = useNavigate();
	const { putUserData } = useUser();
	const schema = yup
		.object({
			email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter no mínimo 6 caracteres')
				.required('Insira sua senha'),
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
		try {
			const response = await api.post(
				'/session',
				{
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);

			console.log('Resposta completa da API:', response.data);

			// Pegando os dados corretamente da resposta da API
			const { id, name, email, admin, token } = response.data;
			const userData = { id, name, email, admin, token };

			if (!userData) {
				console.error('Erro: userData indefinido');
				toast.error('Erro ao recuperar dados do usuário.');
				return;
			}

			// Salvando no contexto e no localStorage
			putUserData(userData);

			if (response.status === 200 || response.status === 201) {
				toast.success('Login efetuado com sucesso 👌', {
					autoClose: 1500,
				});

				setTimeout(() => {
					if (userData?.admin) {
						navigate('/admin/pedidos');
					} else {
						navigate('/');
					}
				}, 1500); // Espera 2 segundos antes de redirecionar
			} else {
				toast.error('Email ou senha inválidos 😞', {
					autoClose: 2000,
				});
			}
		} catch (error) {
			console.error('Erro ao fazer login:', error);
			toast.error('Erro inesperado. Tente novamente 🔌', {
				autoClose: 2000,
			});
		}
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
					Não possui conta? <Link to="/cadastro">Clique aqui</Link>
				</p>
			</RigthContainer>
		</Container>
	);
}
