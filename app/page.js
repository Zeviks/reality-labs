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

const Page = () => (
  <div className="bg-primary-black text-amber-400">
    <Navbar />
    <Hero />
    <Partners />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
