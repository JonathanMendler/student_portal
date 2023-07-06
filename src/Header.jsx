import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> |{" "}
        <a href="#">
          <Link to="/login">Login</Link>
        </a>
      </nav>
    </header>
  );
}
