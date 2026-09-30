import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import InstallationProcess from './components/InstallationProcess';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import SolarSavings from './components/SolarSavings';
import ServiceAreas from './components/ServiceAreas';
import { FAQ } from './components/FAQ';
import LeadCTA from './components/LeadCTA';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { MobileCTA } from './components/MobileCTA';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <AnnouncementBar />
      
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trust Stats Row */}
        <TrustIndicators />

        {/* Services Grid */}
        <Services />

        {/* Why Customers Choose Us */}
        <WhyChooseUs />

        {/* Installation Process */}
        <InstallationProcess />

        {/* Projects Gallery */}
        <Projects />

        {/* Customer Reviews */}
        <Reviews />

        {/* Solar Savings & Subsidy Info */}
        <SolarSavings />

        {/* Service Areas */}
        <ServiceAreas />

        {/* FAQ Section */}
        <FAQ />

        {/* Conversion CTA */}
        <LeadCTA />

        {/* Quote Form */}
        <QuoteForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Elements */}
      <MobileCTA />
      <WhatsAppButton />
    </div>
  );
}

export default App;
