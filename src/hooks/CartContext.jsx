import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([]);

	//adicionar produto no carrinho//
	const addProduct = (product) => {
		const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
		let updatedCartProducts = [];

		if (cartIndex >= 0) {
			updatedCartProducts = cartProducts;

			//pegar o item, achar onde ele está e achar a quantidade e adicionar mais um//
			updatedCartProducts[cartIndex].quantity = updatedCartProducts[cartIndex].quantity + 1;

			setCartProducts(updatedCartProducts);

			//se o produto nao tiver no carrinho ainda quando for clicado no botão de add no carrinho,
			//  ele vai adicionar pela primeira vez na quantidade 1//
		} else {
			product.quantity = 1;
			updatedCartProducts = [...cartProducts, product];

			setCartProducts(updatedCartProducts);
		}

		updateLocalStorage(updatedCartProducts);
	};

	//LIMPAR CARRINHO//
	const clearCart = () => {
		setCartProducts([]);

		updateLocalStorage([]);
	};

	//DELETAR ITEM//
	const deleteProduct = (productId) => {
		//essa variável vai guardar todos os produtos que não foram excluidos//
		const newCart = cartProducts.filter((prd) => prd.id !== productId);

		setCartProducts(newCart);
		updateLocalStorage(newCart);
	};

	//AUMENTAR QTDE PRODUTOS NO CARRINHO//
	const increaseProduct = (productId) => {
		const newCart = cartProducts.map((prd) => {
			return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
		});

		setCartProducts(newCart);
		updateLocalStorage(newCart);
	};

	//DIMINUIR QTDE PRODUTOS NO CARRINHO//
	const decreaseProduct = (productId) => {
		//encontrar o produto dentro do array//
		const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

		//se tiver mais do que 1 produto ele vai diminuir//
		if (cartProducts[cartIndex].quantity > 1) {
			const newCart = cartProducts.map((prd) => {
				return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
			});

			setCartProducts(newCart);
			updateLocalStorage(newCart);

			//se tiver apenas 1 produto ele chamar a função DELETAR//
		} else {
			deleteProduct(productId);
		}
	};

	//ATUALIZANDO O LOCAL STORAGE//
	const updateLocalStorage = (products) => {
		localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
	};

	//vai ser chamado toda vez que a aplicação iniciar//
	useEffect(() => {
		const clientCartData = localStorage.getItem('devburger:cartInfo');

		if (clientCartData) {
			setCartProducts(JSON.parse(clientCartData));
		}
	}, []);

	return (
		<CartContext.Provider
			value={{
				cartProducts,
				addProduct,
				clearCart,
				deleteProduct,
				increaseProduct,
				decreaseProduct,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

//ferramenta a ser usada quando precisar de qquer informação dos itens: cartProducts,
// addProduct, clearCart, deleteProduct, increaseProduct ou decreaseProduct //
export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error('useCart must be used with a context');
	}
	return context;
};
