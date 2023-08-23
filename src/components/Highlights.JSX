import React from "react";
export default function Highlights({ greekSalad, bruchetta, lemonDessert }) {
  return (
    <section className="highlights">
      <div className="highlights-heading">
        <h2>This Week Specials!</h2>
        <a href="/" role="button">
          Online Menu
        </a>
      </div>
      <div className="highlights-products">
        <article>
          <img
            src={greekSalad}
            width={264.667}
            height={185.258}
            alt="Greek Salad"
          />
          <div>
            <div>
              <h3>Greek Salad</h3>
              <p>$12.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              alias totam soluta asperiores dicta pariatur quis magnam, ipsum a
              quibusdam, natus facilis et nesciunt quasi sed laborum, voluptate
              eveniet eum? Quos ratione id natus libero reprehenderit labore
              blanditiis animi assumenda est porro fugiat optio eveniet, ex
              culpa in. In, reprehenderit!
            </p>
            <a href="/">
              Order a delivery <span>A</span>
            </a>
          </div>
        </article>
        <article>
          <img
            src={bruchetta}
            width={264.667}
            height={185.258}
            alt="Bruchetta"
          />
          <div>
            <div>
              <h3>Bruchetta</h3>
              <p>$ 5.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              alias totam soluta asperiores dicta pariatur quis magnam, ipsum a
              quibusdam, natus facilis et nesciunt quasi sed laborum, voluptate
              eveniet eum? Quos ratione id natus libero reprehenderit labore
              blanditiis animi assumenda est porro fugiat optio eveniet, ex
              culpa in. In, reprehenderit!
            </p>
            <a href="/">
              Order a delivery <span>A</span>
            </a>
          </div>
        </article>
        <article>
          <img
            src={lemonDessert}
            width={264.667}
            height={185.258}
            alt="Lemon Dessert"
          />
          <div>
            <div>
              <h3>Lemon Dessert</h3>
              <p>$ 5.00</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              alias totam soluta asperiores dicta pariatur quis magnam, ipsum a
              quibusdam, natus facilis et nesciunt quasi sed laborum, voluptate
              eveniet eum? Quos ratione id natus libero reprehenderit labore
              blanditiis animi assumenda est porro fugiat optio eveniet, ex
              culpa in. In, reprehenderit!
            </p>
            <a href="/">
              Order a delivery <span>A</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
