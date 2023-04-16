import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
