import {FaStar} from 'react-icons/fa6'

export default function Testimonials({
  basket
}) {
  return <section className="testimonials">
          <h2>Testimonials</h2>
          <div>
            <article>
              <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              <div>
                <img src={basket} width={47} height={46} alt="basket" />{" "}
                <h3>John</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam iure a cumque ex commodi perspiciatis similique sed! Inventore, nam!</p>
            </article>
            <article>
            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              <div>
                <img src={basket} width={47} height={46} alt="basket" />{" "}
                <h3>Neo</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam iure a cumque ex commodi perspiciatis similique sed! Inventore, nam!</p>
            </article>
            <article>
            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              <div>
                <img src={basket} width={47} height={46} alt="basket" />{" "}
                <h3>Joy</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam iure a cumque ex commodi perspiciatis similique sed! Inventore, nam!</p>
            </article>
            <article>
            <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
              <div>
                <img src={basket} width={47} height={46} alt="basket" />{" "}
                <h3>Maggi</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam iure a cumque ex commodi perspiciatis similique sed! Inventore, nam!</p>
            </article>
          </div>
        </section>;
}