import { useState } from 'react';

import FormComponent from '../form-input/FormComponent';
import ButtonComponent,{BUTTON_TYPE_CLASSES} from '../button/ButtonComponent';

import { signInAuthUserWithEmailAndPassword,signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { SignInContainer,ButtonsContainer } from './SignIn.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormComponent
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormComponent
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <ButtonComponent type='submit'>Sign In</ButtonComponent>
          <ButtonComponent
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </ButtonComponent>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInComponent;