import { FeaturesSection, HeroSection } from './home-sections';

export const Home = () => {
  return (
    <main className={'flex flex-col items-center'}>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
};
