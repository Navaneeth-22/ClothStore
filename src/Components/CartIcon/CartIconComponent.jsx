import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import {CartIconContainer,ItemCount,ShoppingIcon} from './CartIcon.styles.js';

const CartIconComponent = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIconComponent;