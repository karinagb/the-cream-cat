'use client';
import { useEffect, useState } from 'react';
import IceCream from '../../components/IceCream';
import { CartContext } from '../../components/context';
import { useContext } from 'react';
import { basePath } from '../../lib/siteConfig'

export default function Menu() {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    async function fetchIceCreams() {
      const response = await fetch(`/api/iceCreams.json`);
      const data = await response.json();

      setIceCreams(data);
    }
    fetchIceCreams();
  }, []);

  const [cart, setCart] = useContext(CartContext);

  function addToCart(iceCream) {
    setCart([...cart, iceCream]);
  }

  return (
    <div className='menu'>
      <h1>The Cream Cat Menu</h1>

      <div className='human-ice-cream'>
        <h2>Humans</h2>
        <div className='ice-creams'>
          {iceCreams
            .filter((iceCream) => iceCream.category === 'human')
            .map((iceCream) => (
              <IceCream
                key={iceCream.id}
                image={`${basePath}/assets/ice-creams/${iceCream.image}`}
                name={iceCream.name}
                description={iceCream.description}
                price={iceCream.price}
                addToCart={addToCart}
                iceCream={iceCream}
              />
            ))}
        </div>
      </div>

      <div className='pet-ice-cream'>
        <h2>Pets</h2>
        <div className='ice-creams'>
          {iceCreams
            .filter((iceCream) => iceCream.category === 'pet')
            .map((iceCream) => (
              <IceCream
                key={iceCream.id}
                image={`${basePath}/assets/ice-creams/${iceCream.image}`}
                name={iceCream.name}
                description={iceCream.description}
                price={iceCream.price}
                addToCart={addToCart}
                iceCream={iceCream}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
