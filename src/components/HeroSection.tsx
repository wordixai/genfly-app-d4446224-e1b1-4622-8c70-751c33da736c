import { useState, useEffect } from 'react';
import { ArrowUp, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const prompts = [
    "Quiz me on vocabulary",
    "Plan a surf trip to Costa Rica in August",
    "India stock market today",
    "Explica por qué el maíz palomitas explota",
    "Teach me Mahjong for beginners",
    "Find hiking boots for wide feet",
    "Explain this code",
    "Was mach ich in Berlin wenn es regnet?",
    "What are some outdoor markets in Mexico City?",
    "Rédigez une note de remerciement",
    "Recommend an easy potluck dish",
    "ハーフマラソンのトレーニングを手伝ってください",
    "Help me improve this job description",
    "Write a Python script",
    "Draw a picture of a mini aussie as a diver",
    "Travel pillow that actually works",
    "Translate this recipe into Greek",
    "Rank dog breeds for a small apartment",
    "楽しいディナーパーティーの計画を手伝ってください",
    "Explain paradiddles for me"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % prompts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [prompts.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted:', inputValue);
  };

  return (
    <div className="pt-16 px-sm md:px-md h-[calc(100vh-64px)] max-h-[920px] min-h-[400px] w-full">
      <div className="relative flex h-full w-full flex-col justify-center">
        <div className="flex flex-col items-center justify-center opacity-100 transition-opacity duration-short ease-curve-a">
          <span className="mb-sm mx-auto text-center text-[28px] font-semibold leading-[34px] tracking-[0.38px] text-primary-100">
            What can I help with?
          </span>
          
          <div className="relative z-40 mx-auto w-full max-w-[768px]">
            <form className="relative" onSubmit={handleSubmit}>
              <label className="md:rounded-3xl light:border-primary-12 dark:bg-primary-4 light:border light:bg-secondary-100 light:shadow-splash-chatpgpt-input relative flex w-full cursor-text flex-col overflow-hidden rounded-2xl py-4 pl-4 pr-[52px] bg-primary-4 border border-primary-12">
                <div className="sr-only">Message ChatGPT</div>
                
                {/* Animated placeholder */}
                <div className="text-primary-60 min-h-sm pointer-events-none absolute left-0 top-0 w-full select-none px-4 pt-4 text-base">
                  <div 
                    className="transition-transform ease-in-out duration-500"
                    style={{ transform: `translateY(-${currentPrompt}lh)` }}
                  >
                    {prompts.map((prompt, index) => (
                      <div 
                        key={index}
                        className={`overflow-hidden text-ellipsis whitespace-nowrap transition-opacity duration-500 ${
                          index === currentPrompt ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {prompt}
                      </div>
                    ))}
                  </div>
                </div>

                <textarea
                  className="placeholder:text-primary-60 text-p2 w-full resize-none bg-transparent text-base focus:outline-none text-primary-100"
                  rows={3}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </label>

              <div className="absolute bottom-3 right-3 mt-auto flex justify-end">
                <button
                  className="bg-primary-100 text-secondary-100 disabled:bg-primary-4 disabled:text-primary-44 relative h-9 w-9 rounded-full p-0 transition-colors hover:opacity-70 disabled:hover:opacity-100"
                  type="submit"
                  disabled={!inputValue.trim()}
                  aria-label="Send prompt to ChatGPT"
                >
                  <ArrowUp className="w-5 h-5 mx-auto" />
                </button>
              </div>
            </form>

            <div className="md:min-h-[96px] mt-6 w-full">
              <div className="flex flex-wrap justify-center gap-2 mx-auto w-full max-w-[545px]">
                <a
                  className="border-primary-12 hover:bg-primary-4 whitespace-nowrap text-cta flex h-[40px] items-center rounded-full border border-solid bg-transparent px-3 leading-none transition light:shadow-splash-chatpgpt-links"
                  target="_blank"
                  href="https://chatgpt.com/?hints=search"
                >
                  <span className="text-primary-60 relative">Search with ChatGPT</span>
                </a>
                <a
                  className="border-primary-12 hover:bg-primary-4 whitespace-nowrap text-cta flex h-[40px] items-center rounded-full border border-solid bg-transparent px-3 leading-none transition light:shadow-splash-chatpgpt-links"
                  target="_blank"
                  href="https://chatgpt.com/?mode=voice"
                >
                  <span className="text-primary-60 relative">Talk with ChatGPT</span>
                </a>
                <a
                  className="border-primary-12 hover:bg-primary-4 whitespace-nowrap text-cta flex h-[40px] items-center rounded-full border border-solid bg-transparent px-3 leading-none transition light:shadow-splash-chatpgpt-links"
                  href="/research"
                >
                  <span className="text-primary-60 relative">Research</span>
                </a>
                <a
                  className="border-primary-12 hover:bg-primary-4 whitespace-nowrap text-cta flex h-[40px] items-center rounded-full border border-solid bg-transparent px-3 leading-none transition light:shadow-splash-chatpgpt-links"
                  target="_blank"
                  href="https://sora.com/"
                >
                  <span className="text-primary-60 relative">Sora</span>
                </a>
                <button
                  type="button"
                  className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] border-primary-12 hover:bg-primary-4 whitespace-nowrap text-cta flex h-[40px] items-center rounded-full border border-solid bg-transparent px-3 leading-none transition text-primary-60 light:shadow-splash-chatpgpt-links rounded-full text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0"
                >
                  <span className="relative">More</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 hidden w-full transition md:block" style={{ opacity: 1 }}>
          <button
            type="button"
            className="text-cta text-primary-44 hover:text-primary-100 duration-short ease-curve-a flex items-center transition-colors mx-auto"
          >
            <ChevronDown className="mr-1 w-4 h-4" />
            Scroll to explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;