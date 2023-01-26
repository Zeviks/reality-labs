import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "../../../../components/RichTextComponents";

const post = async ({ params: { slug } }) => {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const generateStaticParams = async () => {
    const query = groq`*[_type=='post']
    {
      slug
    }`;

    const slug = await client.fetch(query);
    const slugRoutes = slug.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
      slug,
    }));
  };

  const post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-2">
      <section className="space-y-2 border-main-400 text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-main-400 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>{post.subtitle}</p>
              </div>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-font-color text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
      <a
        href="/#case-studies"
        className="mt-10 flex items-center h-fit w-fit py-4 px-6 hover:bg-main-400 bg-main-500 rounded-[32px] transition-all"
      >
        <span className="font-normal text-[16px] text-font-color">
          Back to Case Studies
        </span>
      </a>
    </article>
  );
};

export default post;
