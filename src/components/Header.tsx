'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="text2"></span>
      </Link>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li><Link href="/#home">Home</Link></li>
        <li><Link href="/#timeline">Experience</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#skills">Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/#articles">Articles</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
        <li><Link href="/#resume">Resume</Link></li>
      </ul>
    </header>
  );
}
