import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import NewsSection from '../components/NewsSection';
import StoriesSection from '../components/StoriesSection';
import ResearchSection from '../components/ResearchSection';
import BusinessSection from '../components/BusinessSection';
import CTASection from '../components/CTASection';
import FloatingChatInput from '../components/FloatingChatInput';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="relative z-[1] outline-none">
        <article className="flex flex-col gap-16 md:gap-24">
          <HeroSection />
          <FeaturedSection />
          <NewsSection />
          <StoriesSection />
          <ResearchSection />
          <BusinessSection />
          <CTASection />
        </article>
      </main>
      
      <FloatingChatInput />
    </div>
  );
};

export default Index;