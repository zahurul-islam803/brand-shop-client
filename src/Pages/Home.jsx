import { useLoaderData } from "react-router-dom";
import Brands from "../Components/Header/Brands";
import Header from "../Components/Header/Header";
import LatestRelease from "../Components/Header/LatestRelease";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="mb-5">
      <div>
        <Header></Header>
      </div>
      <div className="mt-24 mb-10">
        <h1 className="text-center text-6xl mb-10">Our Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands?.map((brand) => (
            <Brands key={brand.id} brand={brand}></Brands>
          ))}
        </div>
      </div>
      <div className="mt-24 mb-10">
        <h1 className="text-center text-6xl mb-10">Latest Release</h1>
        <LatestRelease></LatestRelease>
      </div>
    </div>
  );
};

export default Home;