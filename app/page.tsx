import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { ChatWidget } from "@/components/chat/chat-widget";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <ChatWidget />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
