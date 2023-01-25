import { Footer, Navbar } from "../components";

import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  Partners,
} from "../sections";

//in order to add multiple gradient, i had to devide the page into multiple and inbetween ad divs

const Page = () => (
  <div className="bg-primary-black text-white overfill-hidden">
    <Navbar />
    <Hero />
    <Partners />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
