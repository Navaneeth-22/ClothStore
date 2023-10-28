import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/CartContext';

import ButtonComponent from '../button/ButtonComponent';
import CartItem from '../CartItem/CartItemComponent';

import { CartDropdownContainer,EmptyMessage,CartItems } from './CartDropdown.styles';

const CartDropdownComponent = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        { cartItems.length ? (
        cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))) : 
        (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }
      </CartItems>
      <ButtonComponent onClick={goToCheckoutHandler}>CHECKOUT</ButtonComponent>
    </CartDropdownContainer>
  );
};

export default CartDropdownComponent;