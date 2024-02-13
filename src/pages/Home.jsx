import Hero from "../sections/Hero";
import CustomerReviews from "../sections/CustomerReviews";
import PopularProducts from "../sections/PopularProducts";
import SpecialOffer from "../sections/SpecialOfffer";
import Services from "../sections/Services";
import SuperQuality from "../sections/SuperQuality";
import Footer from "../sections/Footer";
import Subscribe from "../sections/Subscribe";
import Nav from "../components/Nav";

function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* <Nav /> */}
      <section className="xl:padding-l  wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-  py-10 ">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default Home