'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { LanguageToggle } from '@/components/LanguageToggle';

interface NavItem {
  href: string;
  label: string;
}

export default function Header(): JSX.Element {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const navItems: NavItem[] = [
    { href: '#about', label: t('about') },
    { href: '#experience', label: t('experience') },
    { href: '#portfolio', label: t('portfolio') },
    { href: '#services', label: t('services') },
    { href: '#contact', label: t('contact') },
  ];

  // Scroll spy
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector<HTMLElement>(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(href);
    }
  };

  const getNavItemClass = (isActive: boolean): string =>
    `px-4 py-2 rounded-full transition-all duration-200 font-medium ${
      isActive
        ? 'bg-gradient-to-r from-orange-500 to-[#0a1a3c] text-white shadow-md'
        : 'text-slate-700 dark:text-gray-300 hover:text-orange-600'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-orange-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/" aria-label="Go to homepage" className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text text-shadow-glow">
                Bini Ahmed
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={getNavItemClass(activeSection === item.href)}
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle />
            {/* <Link href="/admin">
              <Button variant="outline" size="sm" className="border-gradient hover-lift">
                {t('admin')}
              </Button>
            </Link> */}
          </nav>

          {/* Actions (lang + darkmode + burger) */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <nav className="py-4 space-y-2 flex flex-col items-center">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-center ${getNavItemClass(activeSection === item.href)}`}
                >
                  {item.label}
                </button>
              ))}
              {/* <Link href="/admin" className="w-full text-center">
                <Button variant="outline" size="sm" className="border-gradient hover-lift">
                  {t('admin')}
                </Button>
              </Link> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
