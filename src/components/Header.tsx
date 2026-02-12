import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/content/siteContent';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-emerald-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={navigation.logoIcon}
              alt={navigation.links[0].label}
              className="h-8 w-auto"
            />
            <span className="text-white font-semibold text-lg hidden sm:block">
              {navigation.links[0].label}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.links.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6"
            >
              <a href={navigation.ctaButton.href} target="_blank" rel="noopener noreferrer">
                {navigation.ctaButton.label}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-t border-emerald-900/30 py-4">
            <nav className="flex flex-col gap-4">
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
                >
                  <a href={navigation.ctaButton.href} target="_blank" rel="noopener noreferrer">
                    {navigation.ctaButton.label}
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
