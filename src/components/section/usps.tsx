import { Container } from "../container";
import { FadeIn } from "../fade-in";

export const Usps = () => {
  return (
    <Container className="relative text-white z-10 md:text-4xl text-3xl font-bold space-y-12 max-w-[692px] py-36">
      <FadeIn>
        <p>New Apple Originals every month — always ad-free.</p>
      </FadeIn>
      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>
      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};
