import { useState } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingChatInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      // Handle form submission
      console.log('Submitted:', inputValue);
      setInputValue('');
    }
  };

  // Show/hide based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky bottom-4 left-0 right-0 z-50 mx-auto h-[48px] w-[200px] transition-all duration-500 focus-within:w-[355px] hover:scale-105 focus-within:hover:scale-100 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      <form className="relative" onSubmit={handleSubmit}>
        <label className="shadow-black-4 bg-secondary-60 relative flex w-full rounded-[24px] p-2 shadow-sm backdrop-blur-xl">
          <input
            className="placeholder:text-primary-60 text-nav-mobile md:text-p2 h-md pr-md mx-3 w-full bg-transparent focus:outline-none text-primary-100"
            placeholder="Ask ChatGPT"
            aria-label="Message ChatGPT"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button
          className="bg-primary-100 text-secondary-100 disabled:bg-primary-44 disabled:text-secondary-60 absolute right-2 top-2 h-8 w-8 flex-none rounded-full p-0 hover:opacity-70 disabled:hover:opacity-100"
          type="submit"
          disabled={!inputValue.trim()}
          aria-label="Send prompt to ChatGPT"
        >
          <ArrowUp className="w-4 h-4 mx-auto" />
        </button>
      </form>
    </div>
  );
};

export default FloatingChatInput;