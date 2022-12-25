import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "./Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Narayan's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
    </div>
  );
};

export default Home;
