const CTASection = () => {
  return (
    <div className="max-w-container w-full">
      <div className="bg-primary-4 py-3xl grid grid-cols-12 rounded-md">
        <div className="px-2xs md:px-0 md:col-span-8 md:col-start-3 col-span-12 flex flex-col">
          <h2 className="text-h2 text-center text-primary-100">Get started with ChatGPT</h2>
          <div className="flex items-center justify-center flex-col">
            <div className="gap-3xs pt-md flex flex-row flex-wrap items-center justify-center">
              <a
                className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] bg-primary-4 text-primary-100 px-xs hover:bg-primary-12 disabled:bg-primary-4 disabled:text-primary-60 focus:bg-primary-12 focus:outline-primary-12"
                href="/chatgpt/download"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;