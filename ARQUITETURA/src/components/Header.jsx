import { Link } from "react-router-dom";

import Logo from "../../src/assets/dnc-logo.svg";
function Header() {
  return (
    <header>
      <div className="CONTAINER">
        <div className="al-center d-flex jc-space-between">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <nav>
          <ul className="d-flex">
            <li>
            <Link to="/HOME">HOME</Link>
            <Link to="/About">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
