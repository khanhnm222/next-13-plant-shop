// next
import Button from '@/components/common/Button';
import Divider from '@/components/common/Divider';
import IconGoogle from '@/components/icons/IconGoogle';
import TextInput from '@/components/common/TextInput';
import Link from 'next/link';
// components

const Register = () => {
  return (
    <>
      <header className='wrapper'>
        <h1 className='py-20 font-medium text-4xl text-center'>
          Register
        </h1>
      </header>
      <main className='py-24 bg-gray-50'>
        <div className='px-10 mx-auto max-w-lg'>
          <Button
            icon='left'
            size='large'
            variant='secondary'
            label='Register with Google'
            additionalClass='w-full mb-5'
          >
            <IconGoogle />
          </Button>
          <Divider label='or' />
          <form action='' className='my-5'>
            <div className='sm:flex sm:gap-2 sm:w-full'>
              <TextInput
                name='name'
                type='text'
                label='First name'
                placeholder='Your first name'
              />
              <TextInput
                name='lastName'
                type='text'
                label='Last name'
                placeholder='Your last name'
              />
            </div>
            <TextInput
              name='email'
              type='mail'
              label='E-mail'
              placeholder='Email address'
            />
            <TextInput
              name='password'
              type='password'
              label='Password'
              placeholder='********'
            />
            <div className='sm:flex justify-between mt-2'>
              Remember me
              <Link href='#'>Forgot password?</Link>
            </div>
            <Button
              size='large'
              variant='primary'
              label='Register'
              additionalClass='mt-5 w-full'
            />
          </form>
          <p className='mt-2.5 mx-auto w-fit'>
            You already have an account ?
            <Link href='/auth/login' className='text-brand-green font-bold'>
              {' '}
              Login
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Register;
