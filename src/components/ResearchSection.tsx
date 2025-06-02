import { Pause } from 'lucide-react';

const ResearchSection = () => {
  const researchItems = [
    {
      id: 1,
      title: "Introducing HealthBench",
      category: "Publication",
      date: "May 12, 2025",
      aspectRatio: "4/3",
      isVideo: false,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      href: "/healthbench"
    },
    {
      id: 2,
      title: "Thinking with images",
      category: "Release",
      date: "Apr 16, 2025",
      aspectRatio: "4/3",
      isVideo: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      href: "/thinking-with-images"
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-container mb-md flex items-baseline justify-between">
        <div>
          <h2 className="text-h4 text-primary-100">Latest research</h2>
        </div>
        <a
          className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
          href="/research"
        >
          View all
        </a>
      </div>
      
      <div className="lg:max-w-container flex w-auto">
        <div className="w-full">
          <div className="md:gap-sm px-sm md:px-md lg:px-0 md:grid md:grid-cols-2 flex-none">
            {researchItems.map((item) => (
              <div key={item.id} className="mb-md md:mb-0 relative min-w-1/2">
                <div className="group relative">
                  <div className={`bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[${item.aspectRatio}]`}></div>
                  <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.025] group-hover:[&_video]:scale-[1.025]">
                    <div className={`relative w-full aspect-[${item.aspectRatio}]`}>
                      {item.isVideo ? (
                        <div className={`aspect-[${item.aspectRatio}] min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover`}>
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
                      ) : (
                        <div className={`relative h-full w-full overflow-hidden rounded-none aspect-[${item.aspectRatio}] ease-curve-d duration-normal bg-transparent transition-[background]`}>
                          <img
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-center absolute inset-0 w-full h-full"
                            src={item.image}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <a
                    aria-label={`${item.title} - ${item.category} - ${item.date}`}
                    className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-['']"
                    href={item.href}
                  >
                    <div className="text-primary-100 relative w-full">
                      <div className="mb-2xs text-h4 md:pr-md">{item.title}</div>
                      <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap md:pr-3xs">
                        <span className="text-nowrap">{item.category}</span>
                        <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                          <time className="text-primary-44 text-nowrap" dateTime={item.date}>
                            {item.date}
                          </time>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;