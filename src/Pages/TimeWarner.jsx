import { Link, useLoaderData } from "react-router-dom";

const TimeWarner = () => {
  const loaderData = useLoaderData();
  const filterTimeWarner = loaderData.filter(
    (data) => data.brand == "Time Warner"
  );
  return (
    <>
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/DMsMB6G/1stt.jpg"
              className="w-full h-[800px] rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/D8DjbDT/t2nd.jpg"
              className="w-full h-[800px] rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/MZS4fGb/t3rd.jpg"
              className="w-full h-[800px] rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-6xl font-extrabold mb-10 mt-24">
          Time Warner
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filterTimeWarner.map((timeWarner) => (
            <div
              key={timeWarner._id}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="card bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={timeWarner.image}
                  alt="sony-picture"
                  className="w-[750px] h-[500px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product Name: {timeWarner.name}</h2>
                <h2 className="card-title">
                  Product Brand: {timeWarner.brand}
                </h2>
                <h2 className="card-title">Product Type: {timeWarner.type}</h2>
                <h2 className="card-title">
                  Product Price: ${timeWarner.price}
                </h2>
                <h2 className="card-title">
                  Product Rating: {timeWarner.rating}
                </h2>
                <div className="card-actions justify-end">
                  <Link to={`/productDetails/${timeWarner._id}`}>
                    <button className="btn btn-info">Details</button>
                  </Link>
                  <Link to={`/products/${timeWarner._id}`}>
                    <button type="submit" className="btn btn-success">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeWarner;