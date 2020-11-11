import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div>
      <Link href='/'>Login</Link>
      <Link href='/kinds'>Kinds of Arguments</Link>
      <Link href='/logout'>Logout</Link>
    </div>
  )
}


export default Header;