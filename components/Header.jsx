'use client';
import Link from 'next/link';
import { CartContext } from './context';
import { useContext } from 'react';

export default function Header() {
  const [cart] = useContext(CartContext);

  return (
    <nav className='nav'>
      <Link href='/' className='nav-link'>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/logo.png`}
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
        <img className='cart-icon' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/cart.svg`} alt='cart' />
        <span className='nav-cart-number'>{cart.length}</span>
      </Link>
    </nav>
  );
}
