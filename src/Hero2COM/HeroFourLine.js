import HeroTools from './HeroTools';
import HeroChallenges from './HeroChallenges';

export default function HeroFourLine() {
  return (
    <section className="relative z-10 flex flex-col gap-4 px-4 mx-auto mb-24 sm:container sm:px-0 grid gap-4 grid-cols-1 lg:grid-cols-[auto_1fr]">
      <div className="relative z-10 flex flex-col gap-4 px-4 mx-auto mb-24 sm:container sm:px-0 grid gap-4 grid-cols-1 lg:grid-cols-[auto_1fr]">
        <HeroTools />
        <HeroChallenges />
      </div>
    </section>
  );
}
