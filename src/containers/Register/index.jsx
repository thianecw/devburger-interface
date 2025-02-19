import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { LeftContainer } from '../../components/LeftContainer';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Container, Form, InputContainer, Link, RigthContainer, Title } from './styles';

export function Register() {
	const navigate = useNavigate();
	const schema = yup
		.object({
			name: yup.string().required('O nome é obrigatório'),
			email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter no mínimo 6 caracteres')
				.required('Insira sua senha'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], 'As senhas devem ser iguais')
				.required('Confirme sua senha'),
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
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},

				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				setTimeout(() => {}, 2000);
				navigate('/login');
				toast.success('Cadastro efetuado com sucesso 👌');
			} else if (status === 400 || status === 409) {
				toast.error('Email já cadastrado. Realize o login para entrar');
			} else {
				throw new Error();
			}
		} catch (error) {
			toast.error('Erro no sistema. Tente novamente 🔌');
		}
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-dev-burger" />
			</LeftContainer>

			<RigthContainer>
				<Title>Criar conta</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label> Nome completo</label>
						<input type="text" {...register('name')} />
						<p> {errors?.name?.message}</p>
					</InputContainer>

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

					<InputContainer>
						<label> Confirmar senha</label>
						<input type="password" {...register('confirmPassword')} />
						<p> {errors?.confirmPassword?.message}</p>
					</InputContainer>
					<Button type="submit"> Criar conta</Button>
				</Form>
				<p>
					Já possui conta? <Link to="/login">Clique aqui</Link>
				</p>
			</RigthContainer>
		</Container>
	);
}
