import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/jankin-videoke-landingpage.css';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Layout from '../components/Layout';
import ScrollToTop from '../components/ScrollToTop';

const LandingPage = () => {
  return (
    <Layout showHeader={true} showFooter={true}>
      <div className="landing-page">
        <HeroSection />
        <FeatureSection />
        <TestimonialsSection />
        <ContactSection />
        <ScrollToTop />
      </div>
    </Layout>
  );
};

export default LandingPage;
