'use client'
import React from 'react'

const Subscribe = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <section className='p-[10rem 8rem] flex flex-col justify-center text-center items-center z-1 relative'>
      <h1 className='mb-[1rem] font-bold text-[2rem] tracking-wide leading-[40px]'>
        Subscribe Our Newsletter
      </h1>
      <p className='mb-[2rem] font-medium text-[1rem] text-brand-green leading-[26px]'>
        Get the latest information and promo offers directly
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className='py-[10px] pr-[120px] pl-[20px] bg-[#FCFCFC]'
          type='email'
          placeholder='Input email address'
        >
        </input>
        <button
          className='py-[15px] px-[20px] bg-primary hover:bg-secondary hover:text-brand-green text-white font-semibold text-[0.9rem] leading-3 ml-[15px]'
          type='submit'
        >
          Get Started
        </button>
      </form>
    </section>
  )
}

export default Subscribe