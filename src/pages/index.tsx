import AboutSection from '@/components/partials/AboutSection';
import HeroSection from '@/components/partials/HeroSection';
import DefaultLayout from '@/layouts/DefaultLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Koran.co">
      <HeroSection />
      <AboutSection />
    </DefaultLayout>
  );
};

export default Home;
