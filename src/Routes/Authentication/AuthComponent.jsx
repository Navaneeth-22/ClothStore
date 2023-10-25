import SignInComponent from '../../Components/sign-in/SignInComponent';
import SignUpComponent from '../../Components/sign-up/SignUpComponent';
import './Auth.styles.scss';

const AuthComponent = () => {
  return (
    <div className='authentication-container'>
        <SignInComponent />
        <SignUpComponent />
    </div>
  );
};

export default AuthComponent;