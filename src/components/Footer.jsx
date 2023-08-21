export default function Footer({
  footerLogo
}) {
  return <footer>
        <img src={footerLogo} alt="" width={162} height={279} />
        <div>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/">About</a>
            </li>
            <li>
            <a href="/">Menu</a>
            </li>
            <li>
            <a href="/">Reservation</a>
            </li>
            <li>
            <a href="/">Order Online</a>
            </li>
            <li>
            <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
            <a href="/">Address</a>
            </li>
            <li>
            <a href="/">Phone</a>
            </li>
            <li>
            <a href="/">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>
            <a href="/">Address</a>
            </li>
            <li>
            <a href="/">Phone</a>
            </li>
            <li>
            <a href="/">Email</a>
            </li>
          </ul>
        </div>
      </footer>;
}
  