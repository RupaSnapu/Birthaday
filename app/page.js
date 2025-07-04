import Head from 'next/head';
import HeroSection from './components/HeroSection';
import HighlightSection from './components/HighlightSection';
import WhyChooseUs from './components/WhyChooseUs';
import PriceJustification from './components/PriceJustification';
import PackagesSection from './components/PackagesSection';
import TrustSection from './components/TrustSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactAndLocation from './components/ContactForm';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Celebratory Moments | Professional Birthday Photography in UK</title>
        <meta name="description" content="Capture your special birthday moments with our professional photography services across UK. Affordable packages, stunning results." />
        <meta name="keywords" content="birthday photography, UK photographer, event photography, birthday photoshoot, professional photographer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50">
        <Navbar/>
        <HeroSection />
           <WhyChooseUs />
        <HighlightSection />
        
        <PriceJustification />
         <ServicesSection />
        <PackagesSection />
        <TrustSection />
       
        <GallerySection />
        <ContactAndLocation/>
        <ScrollToTopButton/>
        <Footer/>
      </main>
    </>
  );
}
