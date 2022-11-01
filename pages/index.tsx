import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home( {exploreData} ) {
  return (
    <div>
      <Head>
        <title>abcnd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className=" max-w-7xl  mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
        {exploreData.map}
        </section>
      </main>
    </div>
  );
};
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );  

  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData
    }
  }
}