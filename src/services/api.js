import axios from 'axios';
import { configs } from 'eslint-plugin-react-refresh';

export const api = axios.create({
	baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');

	config.headers.authorization = `Bearer ${token}`;

	return config;
});
