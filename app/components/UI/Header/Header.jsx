"use client";

import Link from "next/link";
import cl from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cl.header}>
      <span className={cl.logo}>NEXT</span>
      <section className={cl.headerItems}>
        <Link className={cl.link} href="/"><p>Posts</p></Link>
        <Link className={cl.link} href="/about"><p>About Us</p></Link>
      </section>
    </header>
  );
};

export default Header;