
import Brands from "../Components/Header/Brands";
import Header from "../Components/Header/Header";
import LatestRelease from "../Components/Header/LatestRelease";
import NewsLatter from "../Components/Header/NewsLatter";

const Home = () => {
  return (
    <div className="mb-5">
      <div>
        <Header></Header>
      </div>
      <div className="mt-24 mb-10">
        <h1 className="text-center text-6xl mb-10">Our Brands</h1>
        <div>
          <Brands></Brands>
        </div>
      </div>
      <div className="mt-24 mb-10">
        <h1 className="text-center text-6xl mb-10">Latest Release</h1>
        <LatestRelease></LatestRelease>
      </div>
      <div className="mt-24 mb-10">
        <NewsLatter></NewsLatter>
      </div>
    </div>
  );
};

export default Home;