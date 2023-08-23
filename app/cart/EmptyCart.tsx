// next
import Button from '@/components/Button';
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <main className='bg-gray-50 py-10 flex items-center justify-center text-center h-96'>
      <div className='wrapper'>
        <h2 className='text-3xl font-medium mb-2.5'>Your shopping cart is empty</h2>
        <p className='mb-5'>There are no products in your cart</p>
        <Link href='/' title='Plant Shop' className='block w-fit mx-auto'>
          <Button
            size='large'
            variant='primary'
            label='Continue shopping'
            additionalClass='mx-auto'
          />
        </Link>
      </div>
    </main>
  );
};

export default EmptyCart;
