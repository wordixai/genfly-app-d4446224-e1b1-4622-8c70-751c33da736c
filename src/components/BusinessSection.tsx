const BusinessSection = () => {
  const businessStories = [
    {
      id: 1,
      title: "Creating websites in minutes with AI Website Builder",
      category: "API",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      href: "/wix"
    },
    {
      id: 2,
      title: "Shipping code faster with o3, o4-mini, and GPT-4.1",
      category: "API",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=800&fit=crop",
      href: "/coderabbit"
    },
    {
      id: 3,
      title: "The San Antonio Spurs use ChatGPT to scale impact on and off the court",
      category: "ChatGPT",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=800&fit=crop",
      href: "/san-antonio-spurs"
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-container mb-md flex items-baseline justify-between">
        <div>
          <h2 className="text-h4 text-primary-100">OpenAI for business</h2>
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
            {businessStories.map((story) => (
              <div key={story.id} className="mb-md md:mb-0 relative pl-sm md:pl-0 snap-start min-w-[calc(100%_/_3)] pl-0 last:mr-0">
                <div className="group relative">
                  <div className="bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[1/1]"></div>
                  <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.025] group-hover:[&_video]:scale-[1.025]">
                    <div className="relative w-full aspect-[1/1]">
                      <div className="relative h-full w-full overflow-hidden rounded-none aspect-[1/1] ease-curve-d duration-normal bg-transparent transition-[background]">
                        <img
                          alt={story.title}
                          loading="lazy"
                          decoding="async"
                          className="object-cover object-center absolute inset-0 w-full h-full"
                          src={story.image}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <a
                    aria-label={`${story.title} - ${story.category}`}
                    className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-['']"
                    href={story.href}
                  >
                    <div className="text-primary-100 relative w-full">
                      <div className="mb-2xs text-h5 md:pr-md">{story.title}</div>
                      <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap md:pr-3xs">
                        <span className="text-nowrap">{story.category}</span>
                        <span className="gap-x-3xs gap-y-4xs flex flex-wrap"></span>
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

export default BusinessSection;