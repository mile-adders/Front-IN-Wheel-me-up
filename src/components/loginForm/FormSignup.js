/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SocialButton from './styled/SocialButton';
import BrandButton from './styled/BrandButton';
import SlidingForm from './styled/SlidingForm';
// import Facebook from '../logIn/Facebook';
// import Google from '../logIn/Google';
const FormSignup = () => (
  <SlidingForm signup>
    <h1>Create Account</h1>
    <div>
      <SocialButton>
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        {/* <Facebook /> */}

      </SocialButton>
      <SocialButton>
        <FontAwesomeIcon icon={['fab', 'google']} />
        {/* <Google /> */}

      </SocialButton>
    </div>
    <p>or register with your email</p>
    <form>
      <input placeholder="Name" type="text" />
      <input placeholder="Email" type="text" />
      <input placeholder="Password" type="password" />
    </form>
    <BrandButton>Sign up</BrandButton>
  </SlidingForm>
);

export default FormSignup;
