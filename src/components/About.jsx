export default function About({ img1, img2 }) {
  return (
    <section className="about">
      <div>
        <h2>Little Lemon</h2>
        <p>Chicago</p>{" "}
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{" "}
        </p>
      </div>
      <div>
        <img src={img1} width={276} height={338} alt="Mario" />
        <img src={img2} width={272} height={338} alt="Adrian" />
      </div>
    </section>
  );
}
