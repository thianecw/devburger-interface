import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { LeftContainer } from '../../components/LeftContainer';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Container, Form, InputContainer, Link, RigthContainer, Title } from './styles';

//documentação react hook form//
export function Login() {
	const navigate = useNavigate();
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

			const token = response.data.token;
			localStorage.setItem('token', token);

			console.log('Resposta da API:', response);

			// Pegando o status correto da resposta
			if (response?.status === 200 || response?.status === 201) {
				toast.success('Login efetuado com sucesso 👌');
				setTimeout(() => {
					navigate('/');
				}, 2000);
			} else if (response?.status === 401) {
				toast.error('Email ou senha inválidos 😞');
			} else {
				throw new Error(); // Se for um status inesperado, cai no catch
			}
		} catch (error) {
			// Verificando se o erro tem uma resposta da API
			if (error.response) {
				if (error.response.status === 401) {
					toast.error('Email ou senha inválidos 😞');
				} else {
					toast.error('Erro no sistema. Tente novamente mais tarde 😵');
				}
			} else {
				console.error('Erro ao fazer login:', error);
				toast.error('Erro inesperado. Tente novamente 🔌');
			}
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
