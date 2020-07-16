import Head from 'next/head'
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Story() {

  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");
  
  useEffect(() => {
    axios.get('http://localhost:1337/story-content').then((res) => {
      setTitle(res.data.Title);
      setParagraph(res.data.Paragraph);
      setImage(res.data.Image.url);
    });
  }, []);

  return (
    <div id="story-page">
      <div className="page-container">
        <Head>
          <title>Cheese Louise - Story</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="story-main">
          <div className="heading">
            <h1>{title}</h1>
          </div>
          <img src={"http://localhost:1337"+image}></img>
          <div className="paragraph1">
            <p>{paragraph}</p>
          </div>
          <div id="footer">
            <a href="https://www.feedfriend.org/" target="_blank">LEARN MORE<i className="material-icons">navigate_next</i></a>
          </div>
        </main>
      </div>
    </div>
  )
}
