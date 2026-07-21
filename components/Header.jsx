'use client';
import Link from 'next/link';
import { CartContext } from './context';
import { useContext } from 'react';
import { basePath } from '../lib/siteConfig'

export default function Header() {
  const [cart] = useContext(CartContext);

  return (
    <nav className='nav'>
      <Link href='/' className='nav-link'>
        <img
          src={`${basePath}/assets/logo.png`}
          alt='The Cream Cat'
          className='nav-logo'
        />
        The Cream Cat
      </Link>
      <Link href='/menu' className='nav-link'>
        Menu
      </Link>
      <Link href='/contact' className='nav-link'>
        Contact
      </Link>
      <Link href='/cart' className='nav-cart'>
        <img className='cart-icon' src={`${basePath}/assets/cart.svg`} alt='cart' />
        <span className='nav-cart-number'>{cart.length}</span>
      </Link>
    </nav>
  );
}
