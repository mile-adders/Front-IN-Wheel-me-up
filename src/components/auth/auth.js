
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import jwt from 'jsonwebtoken';
import { If, Then } from '../if/index.js';

import LoggerContext from '../auth/context.js';

const Auth = props => {
  const context = useContext(LoggerContext);

  let okToRender = false;
  let user = {};

  try {
    user = context.userToken
      ? jwt.verify(context.userToken, 'cool mai')
      : {};
    okToRender =
      context.login &&
      (props.capability ? user.capabilities.includes(props.capability) : true);
  } catch { console.warn('not cool'); }

  return (
    <If condition={okToRender}>
      <Then>
        <div>{props.children}</div>
      </Then>
    </If>
  );
};

<<<<<<< HEAD
export default Auth;
=======
export default Auth;
>>>>>>> 528f0376b85868af679c422abda8a1082019fd68
