import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Brands = ({ brand }) => {
  return (
    <Link to={'/brandProduct'}>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="card card-compact shadow-xl"
      >
        <figure>
          <img
            className="w-[500px] h-[300px]"
            src={brand.brand_img}
            alt="brand image"
          />
        </figure>
        <div className="card-body items-center my-4">
          <h2 className="card-title text-[#f0ac19cc] text-3xl font-semibold">
            {brand.brand_name}
          </h2>
        </div>
      </div>
    </Link>
  );
};
Brands.propTypes = {
  brand: PropTypes.object,
};
export default Brands;
