import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { ProblemSection } from '@/sections/ProblemSection';
import { SolutionSection } from '@/sections/SolutionSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { BenefitsSection } from '@/sections/BenefitsSection';
import { SolutionsSection } from '@/sections/SolutionsSection';
import { AboutSection } from '@/sections/AboutSection';
import { CTASection } from '@/sections/CTASection';
import { ContactSection } from '@/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0d]">
      <Header />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        <BenefitsSection />
        <SolutionsSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
