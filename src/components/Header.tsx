'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';

  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="text2"></span>
      </Link>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        {isProjectsPage ? (
          <li>
            <Link href="/">
              <i className="bx bx-left-arrow-alt"></i>Back to Home
            </Link>
          </li>
        ) : (
          <>
            <li><a href="#home">Home</a></li>
            <li><a href="#timeline">Experience</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </>
        )}
      </ul>
    </header>
  );
}
