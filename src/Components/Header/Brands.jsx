
import { Link } from "react-router-dom";
const Brands = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div>
        <Link to={`/disney`}>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="card card-compact shadow-xl"
          >
            <figure>
              <img
                className="w-[500px] h-[300px]"
                src="https://i.ibb.co/zb04rjr/disney.jpg"
                alt="brand image"
              />
            </figure>
            <div className="card-body items-center my-4">
              <h2 className="card-title text-[#f0ac19cc] text-3xl font-semibold">
                Disney
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/sonyPictures`}>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="card card-compact shadow-xl"
          >
            <figure>
              <img
                className="w-[500px] h-[300px]"
                src="https://i.ibb.co/QjQk9bw/sony.jpg"
                alt="brand image"
              />
            </figure>
            <div className="card-body items-center my-4">
              <h2 className="card-title text-[#f0ac19cc] text-3xl font-semibold">
                Sony Pictures
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/spotify`}>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="card card-compact shadow-xl"
          >
            <figure>
              <img
                className="w-[500px] h-[300px]"
                src="https://i.ibb.co/26nKZ9G/spotify.jpg"
                alt="brand image"
              />
            </figure>
            <div className="card-body items-center my-4">
              <h2 className="card-title text-[#f0ac19cc] text-3xl font-semibold">
                Spotify
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/timeWarner`}>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="card card-compact shadow-xl"
          >
            <figure>
              <img
                className="w-[500px] h-[300px]"
                src="https://i.ibb.co/Tkbz2xC/time-warner.jpg"
                alt="brand image"
              />
            </figure>
            <div className="card-body items-center my-4">
              <h2 className="card-title text-[#f0ac19cc] text-3xl font-semibold">
                Time Warner
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/warnerBros`}>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="card card-compact shadow-xl"
          >
            <figure>
              <img
                className="w-[500px] h-[300px]"
                src="https://i.ibb.co/QNwd4JJ/warner.jpg"
                alt="brand image"
              />
            </figure>
            <div className="card-body items-center my-4">
              <h2 className="card-title text-[#f0ac19cc] text-3xl font-semibold">
                Warner Bros
              </h2>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/netflix`}>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="card card-compact shadow-xl"
          >
            <figure>
              <img
                className="w-[500px] h-[300px]"
                src="https://i.ibb.co/ZKGTTBF/netflix.jpg"
                alt="brand image"
              />
            </figure>
            <div className="card-body items-center my-4">
              <h2 className="card-title text-[#f0ac19cc] text-3xl font-semibold">
                Netflix
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Brands;
