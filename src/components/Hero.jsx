export default function Hero({ heroImage }) {
  return (
    <section className="hero">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="/" role="button">
          Reserve a Table
        </a>
      </div>
      <div>
        <img src={heroImage} width={375} height={447} alt="restaurant-food" />
      </div>
    </section>
  );
}
