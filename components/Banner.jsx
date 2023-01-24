"use client";
const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="text-7xl">Our Blogs</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-main-500">
            Every Developers
          </span>{" "}
          favorite blog in the Devosphere
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-grey-400 max-w-sm">
        New product features | The latest in technology | The weekly debugging
        nightmares and more!
      </p>
    </div>
  );
};

export default Banner;
