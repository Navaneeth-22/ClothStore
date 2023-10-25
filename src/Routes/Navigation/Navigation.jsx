import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIconComponent from '../../Components/CartIcon/CartIconComponent';
import CartDropdownComponent from '../../Components/CartDropdown/CartDropdownComponent';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutAuthUser } from '../../utils/firebase/firebase.utils';

import './Navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutAuthUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIconComponent />
        </div>
        {isCartOpen && <CartDropdownComponent />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;