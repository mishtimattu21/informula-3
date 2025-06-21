
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'How It Works', href: '#steps' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold gradient-text">IngredientIQ</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600"
            >
              <Search className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <Link to="/auth">Sign In</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button
                  size="sm"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium"
                  asChild
                >
                  <Link to="/auth">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
