import Head from "next/head";

import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => (
  <div className="container">
    <Head>
      <title>Nasr Maswood</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Main />
  </div>
);
export default Home;
