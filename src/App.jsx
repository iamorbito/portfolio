import Hero from "./sections/Hero";
// import Video from "./sections/Video";
import WorkHistory from "./sections/WorkHistory";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import LogoLoop from "./sections/LogoLoop";
import Offer from "./sections/Offer";
import Manifesto from "./sections/Manifesto";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import EndLine from "./sections/EndLine";

export default function App() {
  return (
    <>
      <Hero />
      {/* <Video /> */}
      <WorkHistory />
      <Reviews />
      <Services />
      <LogoLoop />
      <Offer />
      <Manifesto />
      <FAQ />
      <Footer />
      <EndLine />
    </>
  );
}
