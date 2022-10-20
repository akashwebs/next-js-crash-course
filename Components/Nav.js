import Link from "next/link";
import navStyle from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blog"}>blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
