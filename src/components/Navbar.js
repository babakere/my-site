"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.brand} href="/" onClick={() => setIsOpen(false)}>
          Evan Babaker
        </Link>
        <button
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className={styles.menuButton}
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
        <div
          className={`${styles.links} ${isOpen ? styles.open : ""}`}
          id="site-navigation"
        >
          {navItems.map((item) => (
            <a
              className={styles.link}
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
