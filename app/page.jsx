'use client';
import Hero from '../components/Hero';
import TodaysIceCream from '../components/TodaysIceCream';
import Promotions from '../components/Promotions';
import { useState, useEffect } from 'react';
import { CartContext } from '../components/context';
import { useContext } from 'react';
import { basePath } from '../lib/siteConfig'

export default function Home() {
  const [iceCreams, setIceCreams] = useState([]);
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    async function fetchIceCreams() {
      const response = await fetch(`${basePath}/api/iceCreams.json`);
      const data = await response.json();

      setIceCreams(data);
    }

    fetchIceCreams();
  }, []);

  const [randomId1] = useState(() => Math.floor(Math.random() * 10));
  const [randomId2] = useState(() => Math.floor(Math.random() * 10));

  const todaysIceCream = iceCreams[randomId1];
  const promoIceCream = iceCreams[randomId2];

  function addToCart(iceCream) {
    setCart([...cart, iceCream]);
  }

  return (
    <div className='home'>
      <Hero />
      {iceCreams.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <TodaysIceCream
            key={todaysIceCream.id}
            image={`${basePath}/assets/ice-creams/${todaysIceCream.image}`}
            name={todaysIceCream.name}
            description={todaysIceCream.description}
            price={todaysIceCream.price}
            addToCart={addToCart}
            iceCream={todaysIceCream}
          />
          <Promotions
            key={promoIceCream.id}
            image={`${basePath}/assets/ice-creams/${promoIceCream.image}`}
            name={promoIceCream.name}
            price={promoIceCream.price}
            addToCart={addToCart}
            iceCream={promoIceCream}
          />
        </>
      )}
    </div>
  );
}
