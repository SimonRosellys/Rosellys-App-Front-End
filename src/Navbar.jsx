export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/" className="site-title">
            The Rosellys App
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
