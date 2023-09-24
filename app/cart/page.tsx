import PageHeading from '@/components/common/PageHeading';
import Cart from './Cart';
import EmptyCart from './EmptyCart';

function Koszyk() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24 py-8 min-h-[52.7vh]">
      <PageHeading title='Shopping cart' subTitle="The Shop" />
        <Cart />
      </main>

      {/* <EmptyCart /> */}
    </>
  );
}

export default Koszyk;
