import Head from "next/head";

import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => (
  <div className="container">
    <Head>
      <title>Nasr Maswood</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <Main />
  </div>
);
export default Home;
