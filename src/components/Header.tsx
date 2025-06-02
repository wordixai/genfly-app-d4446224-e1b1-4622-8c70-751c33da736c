import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-primary-12">
      <div className="max-w-container mx-auto px-sm flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-primary-100 text-xl font-semibold">
            OpenAI
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/research" className="text-primary-100 hover:text-primary-60 transition-colors">
            Research
          </a>
          <a href="/api" className="text-primary-100 hover:text-primary-60 transition-colors">
            API
          </a>
          <a href="/chatgpt" className="text-primary-100 hover:text-primary-60 transition-colors">
            ChatGPT
          </a>
          <a href="/sora" className="text-primary-100 hover:text-primary-60 transition-colors">
            Sora
          </a>
          <a href="/safety" className="text-primary-100 hover:text-primary-60 transition-colors">
            Safety
          </a>
          <a href="/company" className="text-primary-100 hover:text-primary-60 transition-colors">
            Company
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="text-primary-100 hover:text-primary-60 transition-colors"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="bg-primary-100 text-black px-4 py-2 rounded-full hover:opacity-70 transition-opacity"
          >
            Sign up
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
              <a
                href="/signup"
                className="block bg-primary-100 text-black px-4 py-2 rounded-full text-center hover:opacity-70 transition-opacity"
              >
                Sign up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;