import {
  Navbar,
  FloatingSocialProof,
  Hero,
  FeaturedIn,
  Stats,
  Story,
  TrustProof,
  Testimonials,
  Wins,
  CTA,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <FloatingSocialProof />
      <Navbar />
      <Hero />
      <FeaturedIn />
      <Stats />
      <Story />
      <TrustProof />
      <Testimonials />
      <Wins />
      <CTA />
      <Footer />
    </main>
  );
}
