export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li className="site-title">
          <a href="/">
            <img
              className="nav-logo"
              src={require("../../images/ALBC ROSELLYS LOGO WHITE.png")}
              alt={"Rosellys Logo"}
            />
          </a>
        </li>
        <li>
          <a href="/shows">Shows</a>
        </li>
        <li>
          <a href="/set-lists">Set Lists</a>
        </li>
        <li>
          <a href="/songs">Songs</a>
        </li>
      </ul>
    </nav>
  );
}
