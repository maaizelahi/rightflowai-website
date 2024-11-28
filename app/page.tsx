import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Benefits } from '@/components/sections/benefits';
import { Team } from '@/components/sections/team';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}