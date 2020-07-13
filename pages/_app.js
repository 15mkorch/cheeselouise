import App from 'next/app';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div id="main-container">
        <Navbar />
        <div id="page-container">
          <Component {...pageProps} />
        </div>
      </div>
    )
  }
}

export default MyApp