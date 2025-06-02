import { Pause } from 'lucide-react';

const StoriesSection = () => {
  const stories = [
    {
      id: 1,
      title: "Lyndon Barrois & Sora",
      category: "Sora",
      date: "Dec 4, 2024",
      readTime: "3 min read",
      aspectRatio: "4/5",
      isVideo: true,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=1000&fit=crop",
      href: "/sora-lyndon-barrois"
    },
    {
      id: 2,
      title: "Creating nail art with ChatGPT",
      category: "ChatGPT",
      date: "Feb 4, 2025",
      readTime: "4 min read",
      aspectRatio: "16/9",
      isVideo: false,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=450&fit=crop",
      href: "/ten-tiny-canvases"
    },
    {
      id: 3,
      title: "Economics and reasoning with OpenAI o1",
      category: "ChatGPT",
      date: "Sep 13, 2024",
      readTime: "2 min read",
      aspectRatio: "1/1",
      isVideo: false,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=800&fit=crop",
      href: "/o1-economics"
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-container mb-md flex items-baseline justify-between">
        <div>
          <h2 className="text-h4 text-primary-100">Stories</h2>
        </div>
        <a
          className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
          href="/stories"
        >
          View all
        </a>
      </div>
      
      <div className="lg:max-w-container flex w-auto">
        <div className="w-full no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
          <div className="md:gap-sm px-sm md:px-md lg:px-0 pr-sm md:min-w-[unset] flex min-w-[56rem] grid flex-none grid-cols-3">
            {stories.map((story, index) => (
              <div key={story.id} className="mb-md md:mb-0 relative pl-sm md:pl-0 snap-start min-w-[calc(100%_/_3)] pl-0 last:mr-0">
                <div className="group relative">
                  <div className={`bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[${story.aspectRatio}]`}></div>
                  <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.025] group-hover:[&_video]:scale-[1.025]">
                    <div className={`relative w-full aspect-[${story.aspectRatio}]`}>
                      {story.isVideo ? (
                        <div className={`aspect-[${story.aspectRatio}] min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover`}>
                          <video autoPlay loop playsInline className="group pointer-events-none h-full w-full object-cover">
                            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
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
                        <div className={`relative h-full w-full overflow-hidden rounded-none aspect-[${story.aspectRatio}] ease-curve-d duration-normal bg-transparent transition-[background]`}>
                          <img
                            alt={story.title}
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-center absolute inset-0 w-full h-full"
                            src={story.image}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <a
                    aria-label={`${story.title} - ${story.category} - ${story.date}`}
                    className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-['']"
                    href={story.href}
                  >
                    <div className="text-primary-100 relative w-full">
                      <div className="mb-2xs text-h5 md:pr-md">
                        <p>{story.title}</p>
                      </div>
                      <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap md:pr-3xs">
                        <span className="text-nowrap">{story.category}</span>
                        <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                          <time className="text-primary-44 text-nowrap" dateTime={story.date}>
                            {story.date}
                          </time>
                          <span className="text-primary-44 text-nowrap">{story.readTime}</span>
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

export default StoriesSection;