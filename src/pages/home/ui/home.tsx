import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  HowItWorkSection,
} from './home-sections';

export const Home = () => {
  return (
    <main className={'flex flex-col items-center'}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorkSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
};
