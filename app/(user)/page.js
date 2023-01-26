import { Footer, Navbar } from "../../components";
import {
  About,
  Services,
  Feedback,
  Hero,
  CaseStudies,
  Testimonials,
  Partners,
} from "../../sections";

import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

const query = groq`
*[_type=="post"] {
  ..., 
  author->, // Expand gives you acces to all of the data 
  categories[]-> 
} | order(index asc) // This is what's known as piping. We're piping the result from above and ordering it based on the give order.

`;

//Thanks to next js 13 we can take advantage of asynchonous function due to the nature of server components

const Page = async () => {
  const posts = await client.fetch(query);

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <div className="relative">
        <About />
        <Services />
      </div>
      <div className="relative">
        <div className="gradient-world -z-0" />
        <Testimonials />
      </div>
      <div className="relative">
        <CaseStudies posts={posts} />
        <div className="gradient-04 -z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
