import React, { useGlobal } from 'reactn';

import HeaderAuth from './HeaderAuth';
import HeaderNoAuth from './HeaderNoAuth';
import './Header.scss';

function Header() {
  const [user] = useGlobal('user');

  return user ? <HeaderAuth /> : <HeaderNoAuth />;
}

export default Header;
