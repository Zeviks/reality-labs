import { Footer, Navbar } from "../components";
import {
  About,
  Services,
  Feedback,
  Hero,
  CaseStudies,
  Testimonials,
} from "../sections";

const Page = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Services />
    </div>
    <div className="relative">
      <div className="gradient-world -z-0" />
      <Testimonials />
    </div>

    <div className="relative">
      <CaseStudies />
      <div className="gradient-04 -z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
