import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	Container,
	Form,
	InputCheckBox,
	InputGroup,
	ErrorMessage,
	Label,
	Input,
	LabelUpload,
	Select,
	SubmitButton,
} from './styles';
import { Image } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

const schema = yup.object({
	name: yup.string().required('Informe o nome do produto'),
	price: yup
		.number()
		.positive()
		.typeError('Informe o valor do produto')
		.required('Informe o valor do produto'),
	category: yup.string().required('Selecione a categoria do produto'),
	file: yup
		.mixed()
		.test('required', 'Anexe a imagem do produto', (value) => {
			return value && value.length > 0;
		})
		.test('fileSize', 'Anexe uma imagem até 5mb', (value) => {
			return value && value.length > 0 && value[0].size <= 50000;
		})
		.test('Formato inválido. Anexe uma imagem formato PNG ou JPEG', (value) => {
			return value && value.length > 0 && (value[0].type === 'image/jpeg' || 'image/png');
		}),
	offer: yup.boolean(),
});

export function NewProduct() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategories] = useState([0]);

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('/categories');
			setCategories(data);
		}
		loadCategories();
	}, []);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		const productFormData = new FormData();

		// Verifique os dados antes de enviá-los
		console.log(data);

		productFormData.append('name', data.name);
		productFormData.append('price', data.price * 100);
		productFormData.append('category_id', Number(data.category)); // Convertendo para número
		productFormData.append('file', data.file[0]); // Enviando o arquivo
		productFormData.append('offer', data.offer);

		try {
			await toast.promise(api.post('/products', productFormData), {
				pending: 'Cadastrando novo produto...',
				success: 'Produto cadastrado com sucesso',
				error: 'Falha ao cadastrar o produto. Tente novamente!',
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup>
					<Label> Nome </Label>
					<Input type="text" {...register('name')} />
					<ErrorMessage>{errors?.name?.message} </ErrorMessage>
				</InputGroup>

				<InputGroup>
					<Label> Preço </Label>
					<Input type="number" {...register('price')} />
					<ErrorMessage>{errors?.price?.message} </ErrorMessage>
				</InputGroup>

				<InputGroup>
					<LabelUpload>
						<Image />
						<input
							type="file"
							{...register('file')}
							accept="image/png, image/jpeg"
							onChange={(value) => {
								setFileName(value?.target.files[0]?.name);
								register('file').onChange(value);
							}}
						/>
						{fileName || 'Upload imagem do produto'}
					</LabelUpload>
					<ErrorMessage>{errors?.file?.message} </ErrorMessage>
				</InputGroup>

				<InputGroup>
					<Label> Categoria </Label>
					<Controller
						name="category"
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								placeholder="Categorias"
								options={categories}
								getOptionLabel={(category) => category.name}
								getOptionValue={(category) => category.id}
								menuPortalTarget={document.body}
								onChange={(selectedOption) => field.onChange(selectedOption.id)} // Passa o ID diretamente
								value={categories.find((category) => category.id === field.value)} // Garantir que o valor do select esteja correto
							/>
						)}
					/>
					<ErrorMessage>{errors?.category?.message} </ErrorMessage>
				</InputGroup>

				<InputCheckBox>
					<Label>
						<input type="checkbox" {...register('offer')} /> <Label> Produto em oferta</Label>
					</Label>
				</InputCheckBox>

				<SubmitButton> Cadastrar produto</SubmitButton>
			</Form>
		</Container>
	);
}
