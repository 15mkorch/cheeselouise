import Head from 'next/head'
import Navbar from '../Components/Navbar';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function Menu() {

  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:1337/menu-items').then((res) => {
      setMenuItems(res.data);
    });
  }, []);

  return (
    <div id="menu-page">
      <div className="page-container">
        <Head>
          <title>Cheese Louise - Our Menu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="menu-main">
          <h1 className="title">
            Menu
          </h1>

          <div className="grid">
            {menuItems.map((item) => 
              <div className="card">
                <img className='photo' src={"http://localhost:1337"+item.Image.url} />
                <h3>{item.Title}</h3>
                <p>{item.Description}</p>
              </div>
            )}
          </div>
          <div>
            <p id="footer">Also, grab a side of a salad or fruit cup for $3</p>
          </div>
        </main>
      </div>
    </div>
  )
}
