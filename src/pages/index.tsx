import React from 'react';

import Header from '../components/Header';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Canvas from '../components/Canvas';
import LazyShow from '../components/LazyShow';
import Product from '../components/Product';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Analytics from '../components/Analytics';

const HomePage: React.FC = () => {
  return (
    <div className="bg-background grid gap-y-16 overflow-hidden">
      {/* Header + Hero */}
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative z-10 pb-8 bg-background 
                       sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>

      {/* Decorative canvas */}
      <Canvas />

      {/* Services */}
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>

      {/* Features */}
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>

      {/* Pricing */}
      <LazyShow>
        <Pricing />
      </LazyShow>

      {/* Contact / Footer */}
      <Analytics />
    </div>
  );
};

export default HomePage;