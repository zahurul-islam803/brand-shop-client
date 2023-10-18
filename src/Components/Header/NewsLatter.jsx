
const NewsLatter = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/rsLLc7V/cool-background.png)",
      }}
      data-aos="fade-down"
      data-aos-duration="1000"
      className="footer px-10 py-20 bg-gray-300 rounded-xl text-base-content"
    >
      <div>
        <p className="text-gray-100">
          An entertainment and media websites newsletter section email provides
          subscribers with curated content, <br /> updates, and highlights from
          the world of entertainment, including movies, <br /> music,
          television, celebrity news, and more.
        </p>
      </div>
      <form>
        <header className="footer-title text-gray-100">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-gray-100">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-info absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default NewsLatter;