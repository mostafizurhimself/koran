import HeroSection from '@/components/partials/HeroSection';
import DefaultLayout from '@/layouts/DefaultLayout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Koran.co">
      <HeroSection />
    </DefaultLayout>
  );
};

export default Home;
