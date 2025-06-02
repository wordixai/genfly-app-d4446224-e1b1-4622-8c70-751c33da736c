const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "New tools and features in the Responses API",
      category: "Product",
      date: "May 21, 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      href: "/new-tools-and-features-in-the-responses-api"
    },
    {
      id: 2,
      title: "OpenAI Expands Leadership with Fidji Simo",
      category: "Company",
      date: "May 7, 2025",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=faces",
      href: "/leadership-expansion-with-fidji-simo"
    },
    {
      id: 3,
      title: "Introducing data residency in Asia",
      category: "Product",
      date: "May 7, 2025",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop",
      href: "/introducing-data-residency-in-asia"
    },
    {
      id: 4,
      title: "Evolving OpenAI's structure",
      category: "Company",
      date: "May 5, 2025",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop",
      href: "/evolving-our-structure"
    },
    {
      id: 5,
      title: "Introducing our latest image generation model in the API",
      category: "Product",
      date: "Apr 23, 2025",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop",
      href: "/image-generation-api"
    },
    {
      id: 6,
      title: "Thinking with images",
      category: "Release",
      date: "Apr 16, 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
      href: "/thinking-with-images"
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-container mb-md flex items-baseline justify-between">
        <div>
          <h2 className="text-h4 text-primary-100">Latest news</h2>
        </div>
        <a
          className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
          href="/news"
        >
          View all
        </a>
      </div>
      
      <div className="max-w-container grid w-full grid-cols-1 gap-sm lg:grid-cols-2">
        {newsItems.map((item) => (
          <div key={item.id} className="group relative">
            <div className="group flex w-full items-center overflow-hidden">
              <div className="relative aspect-square flex-[0_0_7.5rem] md:flex-[0_0_11.563rem]">
                <div className="bg-primary-12 absolute left-0 top-0 w-full rounded-md aspect-[1/1]"></div>
                <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md group-hover:[&_img]:scale-[1.04] group-hover:[&_video]:scale-[1.04]">
                  <div className="relative w-full aspect-[1/1]">
                    <div className="relative h-full w-full overflow-hidden rounded-none aspect-[1/1] ease-curve-d duration-normal bg-transparent transition-[background]">
                      <img
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="object-cover object-center absolute inset-0 w-full h-full"
                        src={item.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <a
                aria-label={`${item.title} - ${item.category} - ${item.date}`}
                className="transition ease-curve-a duration-250 pl-xs lg:pl-md text-primary-100 xl:pr-xl flex-auto after:absolute after:inset-0 after:content-['']"
                href={item.href}
              >
                <div>
                  <div className="mb-2xs text-h5">{item.title}</div>
                  <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap">
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
  );
};

export default NewsSection;