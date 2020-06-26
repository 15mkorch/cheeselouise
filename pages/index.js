import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Cheese Louise Gainsville Food Truck
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className='background'>

        </div>
      </main>
    </>
  )
}

export default Home;