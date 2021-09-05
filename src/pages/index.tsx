import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import {
  SampleBox,
  SampleBoxs,
  SampleInlineStyles,
  SampleItem,
  SampleColors,
  SampleFontFamilies,
  SampleFontStyles,
} from '@comp/parts/sample';
import { GetStaticProps } from 'next';
import { Popup } from '@comp/popup/pop';
import { LinkData } from '@comp/links/linkData';
import { SampleFlexBoxs } from '@comp/parts/sample';
import Root from '@comp/parts/Root';

const Home = () => {
  const [base, setBase] = useState(1000);
  const handleChangeBase = useCallback((e) => {
    setBase(e.target.value);
  }, [base]);
  const links = LinkData();
  return (
    <div className='container max-w-screen-md mx-auto text-sans'>
      <Head>
        <title>Tailwind CC</title>
        <meta property='og:title' content='Tailwind CC' />
      </Head>

      <div className='w-full text-gray-900 p-4'>
        <div>
          <div className='sticky text-lg font-bold pt-4'>Work List</div>
          <div className='flex flex-row flex-wrap justify-center items-center'>
            <Root basePrice={base} onChange={(val) => { console.log(val) }} />
          </div>
          <div className='sticky text-lg font-bold pt-4'>Base Price</div>
          <div className='flex flex-row flex-wrap justify-center items-center'>
            <input type='number' className="input input-sm input-bordered w-full" placeholder='basePrice' value={base} onChange={handleChangeBase} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {},
  };
}

export default Home;
