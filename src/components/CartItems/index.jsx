import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import { priceFormat } from '../../utils/priceFormat';
import { ButtonGroup, EmptyCart, ProductImg, TotalPrice, TrashButton } from './styles';
import { Trash } from '@phosphor-icons/react';

export function CartItems() {
	const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

	return (
		<Table.Root>
			<Table.Header>
				<Table.Tr>
					{/* table row */}
					<Table.Th> </Table.Th>
					<Table.Th> Produtos</Table.Th>
					<Table.Th> Preço</Table.Th>
					<Table.Th> Quantidade</Table.Th>
					<Table.Th> Total</Table.Th>
					<Table.Th> </Table.Th>
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				{cartProducts?.length ? (
					cartProducts.map((product) => (
						<Table.Tr key={product.id}>
							<Table.Td>
								<ProductImg src={product.url} />
							</Table.Td>
							<Table.Td>{product.name} </Table.Td>
							<Table.Td>{product.formatedPrice} </Table.Td>
							<Table.Td>
								<ButtonGroup>
									<button onClick={() => decreaseProduct(product.id)}>-</button>
									{product.quantity}
									<button onClick={() => increaseProduct(product.id)}>+</button>
								</ButtonGroup>
							</Table.Td>
							<Table.Td>
								<TotalPrice>{priceFormat(product.price * product.quantity)}</TotalPrice>
							</Table.Td>
							<Table.Td>
								<TrashButton>
									<Trash
										size={32}
										onClick={() => deleteProduct(product.id)}
										style={{ cursor: 'pointer' }}
									/>
								</TrashButton>
							</Table.Td>
						</Table.Tr>
					))
				) : (
					<EmptyCart> O seu carrinho está vazio</EmptyCart>
				)}
			</Table.Body>
		</Table.Root>
	);
}
