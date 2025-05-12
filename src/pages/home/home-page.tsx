import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { FadingDiv } from '@/shared/ui/fading-div.tsx';

import {
  CtaSection,
  FaqSection,
  FeaturesSection,
  HeroSection,
  HiwSection,
} from './ui';

export const HomePage = () => {
  return (
    <FadingDiv>
      <Header />
      <main className={'flex flex-col items-center'}>
        <HeroSection />
        <FeaturesSection />
        <HiwSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </FadingDiv>
  );
};
