import Navbar from './navbar';
import Footer from './footer';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <div className='container max-w-screen-md mx-auto text-sans bg-white text-gray-800'>
        <Navbar children={undefined} />
        <main>{children}</main>
        <Footer children={undefined} />
      </div>
    </>
  );
}
