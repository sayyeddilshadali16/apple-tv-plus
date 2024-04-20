import { FaApple } from "react-icons/fa6";
import { Container } from "./container";
import { Button } from "./button";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a href="/" className="h-[--header-row-height] flex items-center px-6 -ml-6">
            <FaApple className="text-xl" />
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 z-20 bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-[--header-row-height] justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>{" "}
          <Button size="small">Stream Now</Button>
        </Container>
      </div>
    </>
  );
};
