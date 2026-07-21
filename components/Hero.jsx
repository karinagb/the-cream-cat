function Hero() {
  return (
    <div className='hero'>
      <img className='logo' src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/logo.png`} alt='logo' />
      <div className='hero-text'>
        <h1>The Cream Cat</h1>
        <span>Pet-friendly Ice Cream Shop</span>
      </div>
    </div>
  );
}

export default Hero;
