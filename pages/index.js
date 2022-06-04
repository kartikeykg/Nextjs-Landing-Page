import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Feature from '../components/feature/Feature';
import Service from '../components/service/Service';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <Feature/>
      <Service />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
