import { FaApple } from "react-icons/fa6";
import { Container } from "./container";
import { Button } from "./button";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast relative z-20 text-white">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a
            href="/"
            className="h-[--header-row-height] flex items-center px-6 -ml-6"
          >
            <FaApple className="text-xl" />
            <span className="sr-only">Back to homepage</span>
          </a>
          <div className="flex items-center justify-between gap-5 font-extralight">
            <p>Store</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>Vision</p>
            <p>AirPods</p>
            <p>TV & Home</p>
            <p>Entertainment</p>
            <p>Accesories</p>
            <p>Support</p>
            <p>
              <IoSearchOutline />
            </p>
            <p>
              <IoBagOutline />
            </p>
          </div>
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
