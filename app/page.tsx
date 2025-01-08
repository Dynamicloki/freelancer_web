import { HeroSection } from './components/home/hero-section';
import { StatsSection } from './components/home/stats-section';
import { FeaturesSection } from './components/home/features-section';
import { CategoriesSection } from './components/home/categories-section';
import { CTASection } from './components/home/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CategoriesSection />
      <CTASection />
    </div>
  );
}