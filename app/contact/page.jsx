'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log(`from ${name}, email: ${email}, ${message}`);

    setSubmitted(true);
  }

  return (
    <div className='contact'>
      <h1>Contact Us</h1>

      <div className='location'>
        <h2>Visit us in our shop!</h2>
        <img className='shop' src='/assets/shop.png' alt='shop' />
        <p>Location: 412 Pine Street, Capitol Hill, Seattle, WA 98101.</p>
      </div>

      {submitted ? (
        <h3>Submitted!</h3>
      ) : (
        <form action={handleSubmit}>
          <h2>Or send us an email</h2>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <textarea name='message' placeholder='Message' />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
