import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FloatingParticles, GlowingCard, HolographicButton, GradientText } from '../components/ui';

export default function Hero() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingParticles density={80} />

      <motion.section
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6 px-6 py-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl"
              style={{ backgroundSize: '200% 100%' }}
            >
              <span className="text-cyan-400 font-semibold text-sm tracking-wider">
                ✨ CREATIVE UI/UX PLATFORM
              </span>
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
              <GradientText gradient="default" className="block">
                Design.
              </GradientText>
              <GradientText gradient="cosmic" className="block">
                Create.
              </GradientText>
              <GradientText gradient="fire" className="block">
                Inspire.
              </GradientText>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Discover stunning UI components, templates, and design challenges.
              <br />
              <span className="text-cyan-400 font-semibold">Build something extraordinary.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-6 justify-center"
            >
              <HolographicButton
                size="xl"
                onClick={() => navigate('/components')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Explore Components
              </HolographicButton>

              <HolographicButton
                variant="secondary"
                size="xl"
                onClick={() => navigate('/challenges')}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Join Challenges
              </HolographicButton>

              <HolographicButton
                variant="ghost"
                size="xl"
                onClick={() => navigate('/templates')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
                Browse Templates
              </HolographicButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <StatCard
                icon="🎨"
                value="500+"
                label="UI Components"
                delay={0.2}
              />
              <StatCard
                icon="🏆"
                value="50+"
                label="Active Challenges"
                delay={0.4}
              />
              <StatCard
                icon="👥"
                value="10K+"
                label="Creators"
                delay={0.6}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      <FeaturesSection />
      <ShowcaseSection navigate={navigate} />
      <CTASection navigate={navigate} />
    </div>
  );
}

function StatCard({ icon, value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
    >
      <GlowingCard className="h-full">
        <div className="p-8 text-center">
          <div className="text-5xl mb-4">{icon}</div>
          <div className="text-4xl font-bold text-white mb-2">{value}</div>
          <div className="text-slate-400 font-medium">{label}</div>
        </div>
      </GlowingCard>
    </motion.div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "🎨",
      title: "Premium Components",
      description: "Handcrafted UI components with stunning animations and interactions",
      color: "cyan"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized for performance with minimal bundle size",
      color: "purple"
    },
    {
      icon: "🎯",
      title: "Design Challenges",
      description: "Compete with designers worldwide and win prizes",
      color: "pink"
    },
    {
      icon: "🚀",
      title: "Ready Templates",
      description: "Production-ready templates for your next project",
      color: "green"
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Pixel-perfect designs with attention to detail",
      color: "orange"
    },
    {
      icon: "🌟",
      title: "Regular Updates",
      description: "New components and templates added weekly",
      color: "cyan"
    }
  ];

  return (
    <section className="relative z-10 py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <GradientText>Why Choose Us</GradientText>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to build stunning user interfaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <GlowingCard glowColor={color} className="h-full">
        <div className="p-8">
          <div className="text-6xl mb-6">{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>
      </GlowingCard>
    </motion.div>
  );
}

function ShowcaseSection({ navigate }) {
  return (
    <section className="relative z-10 py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <GradientText gradient="cosmic">Featured Work</GradientText>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our most popular components and templates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ShowcaseCard
            title="UI Components"
            description="500+ premium components"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
            onClick={() => navigate('/components')}
            delay={0.2}
          />
          <ShowcaseCard
            title="Templates"
            description="Ready-to-use templates"
            image="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=800&h=600&fit=crop"
            onClick={() => navigate('/templates')}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({ title, description, image, onClick, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <GlowingCard>
        <div className="relative h-96 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-300">{description}</p>
          </div>
        </div>
      </GlowingCard>
    </motion.div>
  );
}

function CTASection({ navigate }) {
  return (
    <section className="relative z-10 py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <GlowingCard glowColor="purple">
          <div className="p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <GradientText gradient="fire">Ready to Create?</GradientText>
              </h2>
              <p className="text-2xl text-slate-300 mb-10">
                Join thousands of creators building beautiful interfaces
              </p>
              <HolographicButton
                size="xl"
                onClick={() => navigate('/signup')}
              >
                Get Started Free
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </HolographicButton>
            </motion.div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
}
