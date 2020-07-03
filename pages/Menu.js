import Head from 'next/head'
import Navbar from '../Components/Navbar';

export default function Menu() {
  return (
    <div id="menu-page">
      <Navbar />
      <div className="container">
        <Head>
          <title>Cheese Louise - Our Menu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="menu-main">
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
    </div>
  )
}
