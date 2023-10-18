
const Header = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000"
      className="hero min-h-screen" style=
      {{
        backgroundImage: "url(https://i.ibb.co/5Lq4rC4/banner.jpg)",
      }}
      ><div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Entertainment and Media</h1>
          <p className="mb-5">
            Discover a world of entertainment and media at our brand shop
            website. From the latest movies and music to exclusive merchandise,
            we are your one-stop destination for all things pop culture.
            Explore, shop, and immerse yourself in the magic of entertainment.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;