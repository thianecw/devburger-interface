import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks';
import { Footer } from './components/Footer';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
			<GlobalStyles />
			<ToastContainer autoClose={4000} theme="light" />
		</AppProvider>
		<Footer />
	</StrictMode>,
);
