import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function CategoriesCarousel() {
	const [categories, SetCategories] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			const response = await api.get('/categories');
			console.log(response);
		}

		loadCategories();
	}, []);

	return (
		<div>
			<h1> Carousel</h1>
		</div>
	);
}
