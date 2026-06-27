'use client';

import { useEffect } from 'react';
import type { MouseEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { label: 'Home', section: 'home' },
  { label: 'Experience', section: 'timeline' },
  { label: 'About', section: 'about' },
  { label: 'Skills', section: 'skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', section: 'articles' },
  { label: 'Contact', section: 'contact' },
  { label: 'Resume', section: 'resume' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (section: string) => {
    const target = document.getElementById(section);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(window.history.state, '', window.location.pathname);
  };

  useEffect(() => {
    if (pathname !== '/') return;

    const pendingSection = sessionStorage.getItem('pending-section');
    if (!pendingSection) return;

    sessionStorage.removeItem('pending-section');
    requestAnimationFrame(() => scrollToSection(pendingSection));
  }, [pathname]);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();

    if (pathname === '/') {
      scrollToSection(section);
      return;
    }

    sessionStorage.setItem('pending-section', section);
    router.push('/');
  };

  return (
    <header className="header">
      <Link href="/" className="logo">
        <span className="text2"></span>
      </Link>
      <button
        type="button"
        className="bx bx-menu"
        id="menu-icon"
        aria-label="Toggle navigation"
        aria-expanded="false"
      />
      <ul className="navbar">
        {navItems.map((item) => (
          <li key={item.label}>
            {'href' in item ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <Link href="/" onClick={(event) => handleSectionClick(event, item.section)}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}
