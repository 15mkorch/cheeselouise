import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div id="index-page">
      <Navbar />
      <div className="page-container">
        <Head>
          <title>
            Cheese Louise - Gainsville Food Truck
          </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Global U is a missions team of entrepreneurs who strive to come together to solve the world’s most pressing problems." />
          <meta property="og:title" content="Cheese Luoise Food Truck in Gainsville, GA" />
          <meta property="og:url" content="http://localhost:3000/about" />
          <meta property="og:image" content="/people.png" />
        </Head>
        <main id="index-main">
          <div className="heading"> 
            <img src='/images/CheeseLouiseHomePage.png'/>
          </div>
          <div id="background"></div>
          <div id="gradient"></div>
        </main>
      </div>
    </div>
  )
}

export default Home;