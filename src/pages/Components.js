import React from 'react';
import Footer from '../HeroCOM/Footer';
import ComponentsCOM from '../ComponentsCOM';

const Components = () => {
  return (
    <section className="min-h-screen relative overflow-hidden text-neutral-200 bg-black">
      <div className="relative z-10">
        <ComponentsCOM />

        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Components;
