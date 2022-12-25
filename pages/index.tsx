import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContentPage from "./ContentPage";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Narayan's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <ContentPage />
      </main>
    </div>
  );
};

export default Home;
