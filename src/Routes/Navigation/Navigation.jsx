import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartDropdownComponent from '../../Components/CartDropdown/CartDropdownComponent';
import CartIconComponent from '../../Components/CartIcon/CartIconComponent';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';

import { ReactComponent as CartLogo } from '../../assets/cart.svg';

import { signOutAuthUser } from '../../utils/firebase/firebase.utils';

import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer,
} from './Navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CartLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutAuthUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIconComponent />
        </NavLinks>
        {isCartOpen && <CartDropdownComponent />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;