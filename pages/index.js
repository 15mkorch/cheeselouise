import Head from 'next/head';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cheese Louise Gainsville Food Truck</title>
        <link rel="icon" href="/favicon.ico" />
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
