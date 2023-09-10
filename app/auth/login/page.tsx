// next
import Button from '@/components/common/Button';
import Divider from '@/components/common/Divider';
import IconGoogle from '@/components/icons/IconGoogle';
import TextInput from '@/components/common/TextInput';
import Link from 'next/link';
// components
// icons

const Login = () => {
  return (
    <>
      <header className='wrapper'>
        <h1 className='py-20 font-medium text-4xl text-center'>Login</h1>
      </header>
      <main className='py-24 bg-gray-50'>
        <div className='px-10 mx-auto max-w-lg'>
          <Button
            icon='left'
            size='large'
            variant='secondary'
            label='Login with Google'
            additionalClass='w-full mb-5'
          >
            <IconGoogle />
          </Button>
          <Divider label='or' />
          <form action='' className='my-5'>
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
              label='Login'
              additionalClass='mt-5 w-full'
            />
          </form>
          <p className='mt-2.5 mx-auto w-fit'>
            You do not have an account ?
            <Link
              href='/auth/register'
              className='text-brand-green font-bold'
            >
              {' '}
              Register
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;
