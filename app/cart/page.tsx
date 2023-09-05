import Cart from './Cart';
import EmptyCart from './EmptyCart';

function Koszyk() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24 min-h-[52.7vh]">
        Shopping cart
        <Cart />
      </main>

      {/* <EmptyCart /> */}
    </>
  );
}

export default Koszyk;
