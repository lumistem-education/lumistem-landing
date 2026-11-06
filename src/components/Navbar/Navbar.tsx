import './Navbar.css';
import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '../Logo.tsx';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navigationItems = [
  { label: 'Giới thiệu', href: '#cockpit' },
  { label: 'Phần mềm', href: '#ecosystem' },
  { label: 'Phần cứng', href: '#hardware' },
  { label: 'Đánh giá', href: '#reviews' },
  { label: 'Tài liệu', href: 'https://wiki.lumistem.org', external: true },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    const updateNavbar = () => {
      frame = null;
      const progress = Math.min(Math.max(window.scrollY / 160, 0), 1);
      const inset = Math.max(16, (document.documentElement.clientWidth - 1120) / 2);
      navbarRef.current?.style.setProperty('--nav-progress', String(progress));
      navbarRef.current?.style.setProperty('--nav-inset', `${inset * (1 - progress)}px`);
    };
    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateNavbar);
    };

    updateNavbar();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <header ref={navbarRef} className="liquid-navbar">
        {/* Official Brand Logo */}
        <a href="#" className="flex shrink-0 items-center">
          <Logo size="xl" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="liquid-navbar-links hidden xl:flex items-center whitespace-nowrap font-medium" aria-label="Điều hướng chính">
          {navigationItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="liquid-nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden xl:flex justify-self-end items-center whitespace-nowrap">
          <a
            href="https://demo.blockly.lumistem.org"
            target="_blank"
            rel="noreferrer"
            className="liquid-btn-primary !py-2.5 !px-4.5 !text-lg !font-bold"
          >
            <span>Mở Studio</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden shrink-0 p-2 rounded-xl bg-white/60 border border-white/80 text-gray-800"
          aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="fixed inset-x-4 top-28 z-50 max-h-[calc(100dvh-128px)] overflow-y-auto p-6 liquid-glass-card xl:hidden shadow-2xl flex flex-col gap-3 animate-in fade-in duration-200">
          {navigationItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="liquid-nav-link py-2.5"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href="https://demo.blockly.lumistem.org"
              target="_blank"
              rel="noreferrer"
              className="liquid-btn-primary w-full justify-center !py-3 !text-sm !font-bold"
            >
              <span>Mở Blockly Studio</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
