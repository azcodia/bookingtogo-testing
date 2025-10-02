import banner from "../assets/banner.png";

export const Banner = () => (
  <div className="relative w-full h-64 sm:h-80 lg:h-96 sm:px-6 my-6">
    <img
      src={banner}
      alt="Marketplace Banner"
      className="w-full h-full object-cover rounded-md"
    />
    <div className="absolute inset-y-0 left-16 flex flex-col justify-center">
      <h2 className="text-3xl sm:text-xl text-white font-bold">
        Discover Our Fall/Winter
      </h2>
      <span className="text-xl sm:text-lg text-white font-bold">
        2025 Collection
      </span>
      <p className="text-white font-thin">
        Step into the season with fresh new arrivals
      </p>
    </div>
  </div>
);
