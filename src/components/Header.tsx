import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-primary-100 text-lg font-semibold flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6Z" fill="white"/>
            </svg>
            <span>OpenAI</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/research" className="text-primary-100 hover:text-primary-60 transition-colors text-sm">
            Research
          </a>
          <a href="/api" className="text-primary-100 hover:text-primary-60 transition-colors text-sm">
            API
          </a>
          <a href="/chatgpt" className="text-primary-100 hover:text-primary-60 transition-colors text-sm">
            ChatGPT
          </a>
          <a href="/sora" className="text-primary-100 hover:text-primary-60 transition-colors text-sm">
            Sora
          </a>
          <a href="/safety" className="text-primary-100 hover:text-primary-60 transition-colors text-sm">
            Safety
          </a>
          <a href="/company" className="text-primary-100 hover:text-primary-60 transition-colors text-sm">
            Company
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="/login"
            className="text-primary-100 hover:text-primary-60 transition-colors text-sm mr-4"
          >
            Log in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-primary-12">
          <nav className="px-sm py-4 space-y-4">
            <a href="/research" className="block text-primary-100 hover:text-primary-60 transition-colors">
              Research
            </a>
            <a href="/api" className="block text-primary-100 hover:text-primary-60 transition-colors">
              API
            </a>
            <a href="/chatgpt" className="block text-primary-100 hover:text-primary-60 transition-colors">
              ChatGPT
            </a>
            <a href="/sora" className="block text-primary-100 hover:text-primary-60 transition-colors">
              Sora
            </a>
            <a href="/safety" className="block text-primary-100 hover:text-primary-60 transition-colors">
              Safety
            </a>
            <a href="/company" className="block text-primary-100 hover:text-primary-60 transition-colors">
              Company
            </a>
            <div className="pt-4 border-t border-primary-12 space-y-4">
              <a href="/login" className="block text-primary-100 hover:text-primary-60 transition-colors">
                Log in
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;