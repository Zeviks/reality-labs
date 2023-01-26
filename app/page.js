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
} from "../sections";

const Page = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-world -z-0" />
      <World />
    </div>

    <div className="relative">
      <Insights />
      <div className="gradient-04 -z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
