import Link from "next/link";
import style from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <nav>
      <Link className={style["menu-container"]} href="/">
        Home
      </Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};
