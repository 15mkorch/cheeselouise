import Head from 'next/head';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cheese Louise Gainsville Food Truck</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GlobalU Mask Operation</title>
        <meta name="description" content="Global U is a missions team of entrepreneurs who strive to come together to solve the world’s most pressing problems." />
        <meta property="og:title" content="Cheese Luoise Food Truck in Gainsville, GA" />
        <meta property="og:url" content="http://localhost:3000/about" />
        <meta property="og:image" content="/people.png" />
        <link rel="stylesheet" href="../styles.css" />
      </Head>

      <main>
        <Navbar />
        <div className='background'>

        </div>
      </main>


      <style jsx>{`
        .background {
          background-image: url(./grilledCheese.jpg);
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
