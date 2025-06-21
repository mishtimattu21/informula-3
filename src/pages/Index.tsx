
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { StepsSection } from '@/components/steps-section';
import { FeaturesSection } from '@/components/features-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
