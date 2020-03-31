/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialButton from './styled/SocialButton';
import BrandButton from './styled/BrandButton';
import SlidingForm from './styled/SlidingForm';
import Facebook from '../logIn/Facebook';
import Google from '../logIn/Google';

const FormLogin = () => (
  <SlidingForm>
    <h1>Sign in</h1>
    <div>
      <SocialButton>
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        <Facebook />
      </SocialButton>
      <SocialButton>
        <FontAwesomeIcon icon={['fab', 'google']} />
        <Google />
      </SocialButton>
    </div>
    <p>or use your account</p>
    <form>
      <input placeholder="Email" type="text" />
      <input placeholder="Password" type="password" />
    </form>
    <p>
      <a href="/login">Forgot your password?</a>
    </p>
    <BrandButton>Sign in</BrandButton>
  </SlidingForm>
);

export default FormLogin;
