import Head from 'next/head'
import Navbar from '../Components/Navbar';

export default function Story() {
  return (
    <div id="story-page">
      <div className="page-container">
        <Head>
          <title>Cheese Louise - Our Menu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="story-main">
          <div className="heading">
            <h1>More Than a Food Truck</h1>
          </div>
          <img src="/images/Swazi.png"></img>
          <div className="paragraph1">
            <p>Every sandwich you buy at Cheese Louise makes a difference to those who are struggling. We believe that <i>"to whom much is given, much is expected."</i> So we are partnering with a ministry called <i>"Feed a Friend"</i> to help address world hunger. When you buy our sandwich, we send enough money to feed a vulnerable child in Swaziland, a nation where children often go without food for days. We also send money to needy children in America to supplement their nutrition. At Cheese Louise, we do more than satisfy your hunger, we partner with you to meet the needs of hungry children.</p>
          </div>
          <div id="footer">
            <a href="https://www.feedfriend.org/" target="_blank">LEARN MORE<i className="material-icons">navigate_next</i></a>
          </div>
        </main>
      </div>
    </div>
  )
}
