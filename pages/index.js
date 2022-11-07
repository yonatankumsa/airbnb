import Head from 'next/head';
import Banner from '../components/banner';
import Header from '../components/header';
import SmallCard from '../components/smallcard';
import MediumCard from '../components/mediumcard';
import LargeCard from '../components/largecard';
import Footer from '../components/footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Air BnB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header @header.js*/}
      <Header />

      {/*Banner @banner.js*/}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull card data from server using server side rendering */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
           
                <SmallCard
                key={"https://links.papareact.com/ynx"}
                img={"https://links.papareact.com/ynx"}
                location={"Birkenhead"}
                distance={ "45-minute drive"}
              />
               <SmallCard
                key={"https://links.papareact.com/kji"}
                img={"https://links.papareact.com/kji"}
                location={"Newquay"}
                distance={"4.5-hour drive"}
              />
               <SmallCard
                key={"Manchester"}
                img={"https://links.papareact.com/41m"}
                location={"Hove"}
                distance={"4.5-hour drive"}
              />
               <SmallCard
                key={"https://links.papareact.com/ynx"}
                img={"https://links.papareact.com/ynx"}
                location={"Birkenhead"}
                distance={ "4-hour drive"}
              />
               <SmallCard
                key={"https://links.papareact.com/2k3"}
                img={"https://links.papareact.com/2k3"}
                location={"Cardiff"}
                distance={"45-minute drive"}
              />
               <SmallCard
                key={"https://links.papareact.com/ynx"}
                img={"https://links.papareact.com/ynx"}
                location={"Birkenhead"}
                distance={ "4.5-hour drive"}
              />
               <SmallCard
                key={"https://links.papareact.com/2k3"}
                img={"https://links.papareact.com/2k3"}
                location={"Cardiff"}
                distance={"6-hour drive"}
              />
               <SmallCard
                key={"https://links.papareact.com/msp"}
                img={"https://links.papareact.com/msp"}
                location={"York"}
                distance={"2-hour drive"}
              />
               <SmallCard
                key={"https://links.papareact.com/40m"}
                img={"https://links.papareact.com/40m"}
                location={"Liverpool"}
                distance={"9-hour drive"}
              />
               <SmallCard
                key={"https://links.papareact.com/1to"}
                img={"https://links.papareact.com/1to"}
                location={"Manchester"}
                distance={"6-hour drive"}
              />
               <SmallCard
                key={"Manchester"}
                img={"https://links.papareact.com/41m"}
                location={"Yojnh"}
                distance={"6.5-hour drive"}
                />
                  <SmallCard
                key={"https://links.papareact.com/ynx"}
                img={"https://links.papareact.com/ynx"}
                location={"DC"}
                distance={ "45-minute drive"}
              />
      
          </div>
        </section>
        {/* Medium Card Section with scrolling gallery */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          {/*  Pull image data from server using server side rendering */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 max-w-10xl'>
           
              <MediumCard
                key={"https://links.papareact.com/ynx"}
                img={"https://links.papareact.com/2io"}
                title={"Outdoor getaways"}
              />
               <MediumCard
                key={"https://links.papareact.com/kji"}
                img={"https://links.papareact.com/q7j"}
                title={"Unique stays"}
              />
               <MediumCard
                key={"Manchester"}
                img={"https://links.papareact.com/s03"}
                title={"Entire homes"}
              />
               <MediumCard
                key={"https://links.papareact.com/ynx"}
                img={"https://links.papareact.com/8ix"}
                title={"Pet allowed"}
              />
               {/* <MediumCard
                key={"https://links.papareact.com/2k3"}
                img={"https://links.papareact.com/2k3"}
                title={"Cardiff"}
              />
               <MediumCard
                key={"https://links.papareact.com/ynx"}
                img={"https://links.papareact.com/ynx"}
                title={"Birkenhead"}
              />
               <MediumCard
                key={"https://links.papareact.com/2k3"}
                img={"https://links.papareact.com/2k3"}
                title={"Cardiff"}
              />
               <MediumCard
                key={"https://links.papareact.com/msp"}
                img={"https://links.papareact.com/msp"}
                title={"York"}
              />
               <MediumCard
                key={"https://links.papareact.com/40m"}
                img={"https://links.papareact.com/40m"}
                title={"Liverpool"}
              />
               <MediumCard
                key={"https://links.papareact.com/1to"}
                img={"https://links.papareact.com/1to"}
                title={"Manchester"}
              /> */}
      
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description=' Wishlist curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  )
}

// export function getStaticProps() {
//   const exploreData =  fetch('https://links.papareact.com/pyp').then(
//     (res) => res.json()
//   );  

//   const cardsData =  fetch('https://links.papareact.com/zp1').then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       exploreData: exploreData,
//       cardsData: cardsData
//     }
//   }
// }