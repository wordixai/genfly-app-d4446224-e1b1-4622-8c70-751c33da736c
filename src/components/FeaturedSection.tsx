import { Pause } from 'lucide-react';

const FeaturedSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-container grid w-full grid-cols-1 lg:grid-cols-4 gap-sm">
        {/* Main featured article */}
        <div className="lg:col-span-3 lg:sticky lg:mb-0 mb-sm self-start transition-[top] lg:top-16">
          {/* Mobile version */}
          <div className="px-sm block md:hidden">
            <div className="group relative">
              <div className="bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[4/5]"></div>
              <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.0125] group-hover:[&_video]:scale-[1.0125]">
                <div className="relative w-full aspect-[4/5]">
                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-[4/5] ease-curve-d duration-normal bg-transparent transition-[background]">
                    <img
                      alt="Sam Altman and Jony Ive"
                      loading="lazy"
                      decoding="async"
                      className="object-cover object-center absolute inset-0 w-full h-full"
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=1000&fit=crop&crop=faces"
                    />
                  </div>
                </div>
              </div>
              <a
                aria-label="Sam & Jony introduce io - Company - May 21, 2025"
                className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-['']"
                href="/sam-and-jony"
              >
                <div className="text-primary-100 relative w-full">
                  <div className="mb-2xs text-h2 md:pr-2xl">Sam & Jony introduce io</div>
                  <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap md:pr-md">
                    <span className="text-nowrap">Company</span>
                    <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                      <time className="text-primary-44 text-nowrap" dateTime="2025-05-21T00:00">
                        May 21, 2025
                      </time>
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Desktop version */}
          <div className="px-sm md:px-md lg:px-0 relative hidden md:block">
            <div className="group relative">
              <div className="bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[16/9]"></div>
              <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.0125] group-hover:[&_video]:scale-[1.0125]">
                <div className="relative w-full aspect-[16/9]">
                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-[16/9] ease-curve-d duration-normal bg-transparent transition-[background]">
                    <img
                      alt="Sam Altman and Jony Ive"
                      loading="lazy"
                      decoding="async"
                      className="object-cover object-center absolute inset-0 w-full h-full"
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&h=900&fit=crop&crop=faces"
                    />
                  </div>
                </div>
              </div>
              <a
                aria-label="Sam & Jony introduce io - Company - May 21, 2025"
                className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-['']"
                href="/sam-and-jony"
              >
                <div className="text-primary-100 relative w-full">
                  <div className="mb-2xs text-h2 md:pr-2xl">Sam & Jony introduce io</div>
                  <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap md:pr-md">
                    <span className="text-nowrap">Company</span>
                    <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                      <time className="text-primary-44 text-nowrap" dateTime="2025-05-21T00:00">
                        May 21, 2025
                      </time>
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Side articles */}
        <div className="px-sm md:px-md lg:px-0 lg:grid-cols-1 gap-y-xl gap-x-2xs col-span-1 grid grid-cols-1 md:grid-cols-3">
          {/* Article 1 - Codex */}
          <div className="lg:pb-[var(--pb)] relative">
            <div className="group relative">
              <div className="bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[1/1]"></div>
              <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.025] group-hover:[&_video]:scale-[1.025]">
                <div className="relative w-full aspect-[1/1]">
                  <div className="aspect-[1/1] min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover">
                    <video autoPlay loop playsInline className="group pointer-events-none h-full w-full object-cover">
                      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button
                      type="button"
                      className="text-secondary-100 bg-primary-44 focus:outline-primary-44 backdrop-blur-[4.375rem] ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[32px] h-[32px] hover:bg-primary-60 right-2xs top-2xs absolute z-[1] opacity-0 transition duration-200 hover:opacity-100 group-hover:opacity-100"
                      aria-label="Pause video"
                    >
                      <Pause className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
              <a
                aria-label="Introducing Codex - Release - May 16, 2025"
                className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-['']"
                href="/introducing-codex"
              >
                <div className="text-primary-100 relative w-full">
                  <div className="mb-2xs text-h5 md:pr-md">Introducing Codex</div>
                  <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap md:pr-3xs">
                    <span className="text-nowrap">Release</span>
                    <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                      <span className="text-primary-44 text-nowrap">11 min read</span>
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Article 2 - o3 and o4-mini */}
          <div className="lg:pb-[var(--pb)] relative">
            <div className="group relative">
              <div className="bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[1/1]"></div>
              <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.025] group-hover:[&_video]:scale-[1.025]">
                <div className="relative w-full aspect-[1/1]">
                  <div className="aspect-[1/1] min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover">
                    <video autoPlay loop playsInline className="group pointer-events-none h-full w-full object-cover">
                      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button
                      type="button"
                      className="text-secondary-100 bg-primary-44 focus:outline-primary-44 backdrop-blur-[4.375rem] ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[32px] h-[32px] hover:bg-primary-60 right-2xs top-2xs absolute z-[1] opacity-0 transition duration-200 hover:opacity-100 group-hover:opacity-100"
                      aria-label="Pause video"
                    >
                      <Pause className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
              <a
                aria-label="OpenAI o3 and o4-mini - Release - Apr 16, 2025"
                className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-['']"
                href="/introducing-o3-and-o4-mini"
              >
                <div className="text-primary-100 relative w-full">
                  <div className="mb-2xs text-h5 md:pr-md">
                    <p>OpenAI o3 and o4-mini</p>
                  </div>
                  <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap md:pr-3xs">
                    <span className="text-nowrap">Release</span>
                    <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                      <span className="text-primary-44 text-nowrap">6 min read</span>
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Article 3 - Math Tutor */}
          <div className="lg:pb-[var(--pb)] relative">
            <div className="group relative">
              <div className="bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[1/1]"></div>
              <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.025] group-hover:[&_video]:scale-[1.025]">
                <div className="relative w-full aspect-[1/1]">
                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-[1/1] ease-curve-d duration-normal bg-transparent transition-[background]">
                    <img
                      alt="Math Tutor Cover"
                      loading="lazy"
                      decoding="async"
                      className="object-cover object-center absolute inset-0 w-full h-full"
                      src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=800&fit=crop"
                    />
                  </div>
                </div>
              </div>
              <a
                aria-label="Building a custom math tutor powered by ChatGPT - ChatGPT - Feb 4, 2025"
                className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-['']"
                href="/my-dog-the-math-tutor"
              >
                <div className="text-primary-100 relative w-full">
                  <div className="mb-2xs text-h5 md:pr-md">Building a custom math tutor powered by ChatGPT</div>
                  <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap md:pr-3xs">
                    <span className="text-nowrap">ChatGPT</span>
                    <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                      <span className="text-primary-44 text-nowrap">4 min read</span>
                    </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;