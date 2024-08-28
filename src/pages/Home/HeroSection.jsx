export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Lidia</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Aspiring</span>{" "}
            <br />
            Frontend Developer
          </h1>
          <p className="hero--section-description">
            I'm a Computer Science major at UTSA with a passion for crafting beautiful and responsive user interfaces. <br />
            Eager to turn complex problems into simple, elegant solutions through code.
          </p>
        </div>
        <button className="btn btn-primary">Let's Connect</button>
      </div>
      <div className="hero--section--img">
        <img src="" alt="Hero Section" />
      </div>
    </section>
  );
}

