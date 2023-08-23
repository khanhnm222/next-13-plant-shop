import Cart from './Cart';
import EmptyCart from './EmptyCart';

function Koszyk() {
  return (
    <>
      <header className='wrapper'>
        <h1 className='text-3xl md:text-5xl font-medium py-5'>Your basket</h1>
      </header>

      {/* <EmptyCart /> */}
      <Cart />
    </>
  );
}

export default Koszyk;
