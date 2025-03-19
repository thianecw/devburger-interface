import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
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
	sale: yup.boolean(),
});
export function EditProduct() {
	const [fileName, setFileName] = useState(null);
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const activeCategory = queryParams.get('categoria'); // Pega a categoria da URL

	const [activeTab, setActiveTab] = useState(activeCategory || 'entradas'); // Se não houver categoria, usa 'entradas'

	useEffect(() => {
		if (activeCategory) {
			setActiveTab(activeCategory); // Define a aba ativa com base na categoria da URL
		}
	}, [activeCategory]);

	// Lógica de renderização das abas

	const {
		state: { product, currentCategory },
	} = useLocation();

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

		productFormData.append('name', data.name);
		productFormData.append('price', (data.price * 100).toFixed(2)); // Arredonda para duas casas decimais
		productFormData.append('category_id', Number(data.category));
		productFormData.append('file', data.file[0]);
		productFormData.append('sale', data.sale);

		try {
			await toast.promise(
				api.put(`/products/${product.id}`, productFormData),
				{
					pending: 'Editando novo produto... ⏳',
					success: 'Produto editado com sucesso! 🎉',
					error: 'Falha ao editar o produto. Tente novamente! ❌',
				},
				{
					autoClose: 1500,
				},
			);
		} catch (error) {
			console.error(error);
		}
		setTimeout(() => {
			navigate(`/admin/produtos?categoria=${currentCategory}`, {
				state: { shouldRefresh: true },
			});
		}, 2000);
	};

	return (
		<Container>
			<p>EDITAR PRODUTO</p>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup>
					<Label> Nome </Label>
					<Input type="text" {...register('name')} defaultValue={product.name || ''} />
					<ErrorMessage>{errors?.name?.message} </ErrorMessage>
				</InputGroup>

				<InputGroup>
					<Label> Preço </Label>
					<Input
						type="number"
						step="0.01" // até duas casas decimais
						{...register('price')}
						defaultValue={product.price ? (product.price / 100).toFixed(2) : 0.0} // Preço com duas casas decimais
						min="0"
					/>

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
						defaultValue={product.category.id} // Certifique-se de pegar o ID da categoria
						control={control}
						render={({ field }) => (
							<Select
								{...field}
								placeholder="Categorias"
								options={categories} // Passando as categorias
								getOptionLabel={(category) => category.name} // Nome da categoria
								getOptionValue={(category) => category.id} // Valor do id da categoria
								menuPortalTarget={document.body}
								onChange={(selectedOption) => field.onChange(selectedOption.id)} // Passando o ID da categoria selecionada
								value={categories.find((category) => category.id === field.value)} // Selecionando a categoria com base no valor do ID
							/>
						)}
					/>
					<ErrorMessage>{errors?.category?.message} </ErrorMessage>
				</InputGroup>

				<InputCheckBox>
					<Label>
						<input type="checkbox" defaultValue={product.sale} {...register('sale')} /> Produto em
						oferta
					</Label>
				</InputCheckBox>

				<SubmitButton> Atualizar informações</SubmitButton>
			</Form>
		</Container>
	);
}
