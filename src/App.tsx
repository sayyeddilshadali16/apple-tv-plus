import { Footer } from "./components/footer.tsx";
import { Header } from "./components/header";
import { Hero } from "./components/section/hero.tsx";
import { Usps } from "./components/section/usps.tsx";
import { VideoCarousel } from "./components/section/video-carousel.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <div className="h-[100vh]" />
        <Footer />
      </main>
    </>
  );
};

export default App;
