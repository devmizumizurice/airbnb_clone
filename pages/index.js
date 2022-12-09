import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

function Home({ exploreData, cardsData }) {
  return (
    <div class=''>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Banner />
      <main class='max-w-7xl mx-auto px-8 sm:px-16'>
        <section class='pt-6'>
          <h2 class='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {/* Pull some data from the server */}
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location} />
            ))}
          </div>
        </section>

        <section>
          <h2 class='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 p-3 -ml-3 overflow-scroll scrollbar-hide'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://www.pakutaso.com/shared/img/thumb/neruneruPAR53936.jpg'
          title='The Gratest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) => res.json());
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}