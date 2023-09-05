// components
import Button from '@/components/common/Button';
import IconArrowRight from '@/components/icons/IconArrowRight';
import Link from 'next/link';
import CartProductCard from './CartProductCard';

const Cart = () => {
  return (
    <main className='wrapper lg:grid lg:grid-cols-2-1 gap-20'>
      <div className='my-10'>
        <CartProductCard
          number={1}
          title='Monstera'
          imgSrc='/monstera.webp'
          shortDescription=''
          price={120}
          discountedPrice={200}
        />
      </div>
      <aside>
        <div className='p-4 bg-gray-50 rounded-lg'>
          Product list
          <Button
            size='large'
            variant='primary'
            label='Continue to payment'
            additionalClass='w-full mt-2.5'
            icon='right'
          >
            <IconArrowRight />
          </Button>
          <p className='mt-1 text-center text-xs text-gray-500'>
            At this stage, you are not making a payment yet
          </p>
          <Link href='/' title='Plant shop'>
            <Button
              size='large'
              variant='secondary'
              label='Continue shopping'
              additionalClass='w-full mt-2.5'
            />
          </Link>
        </div>
      </aside>
    </main>
  );
};

export default Cart;
