import Head from "next/head";

import { Main } from "./components/Main";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nasr Maswood</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
