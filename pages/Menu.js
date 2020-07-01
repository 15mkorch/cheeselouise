import Head from 'next/head'
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className="title">
            Menu
        </h1>

          <p className="description">
            Add line here
        </p>

          <div className="grid">
            <div className="card">
              <img className='photo' src="/stock.png" />
              <h3>The Classic $4</h3>
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
              <p>Cheddar cheese on sour dough</p>
            </div>

            <div className="card">
              <img className='photo' src="/stock.png" />
              <h3>Southern B.T.C $8</h3>
              <p>Thick cut bacon, fresh sliced tomato & chedadr cheese on sour dough</p>
            </div>

            <div className="card">
              <img className='photo' src="/stock.png" />
              <h3>El Guapo $8</h3>
              <p>Pepper jack, white american, chorizo & pickled jalapeno on sour dough</p>
            </div>

            <div className="card">
              <img className='photo' src="/stock.png" />
              <h3>All the Cheese $6</h3>
              <p>Literally all the cheese on french bread</p>
            </div>

            <div className="card">
              <img className='photo' src="/stock.png" />
              <h3>Basil Turkey Melt $8</h3>
              <p>Thin sliced turkey breast, fresh basil, swiss, fresh sliced tomato & peso aoli on french bread</p>
            </div>

            <div className="card">
              <img className='photo' src="/stock.png" />
              <h3>The BBQ Beast $10</h3>
              <p>BBQ pulled pork, swet & spicy BBQ sauce & cole slaw between two classic grilled cheese sandwiches</p>
            </div>

          </div>
          <div>
            <p>Also, grab a side of a salad or fruit cup $3</p>
          </div>
        </main>
      </div>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        paragraph {
          font-family: 'Open Sans', sans-serif;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #89837E;
          border-color: #89837E;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
