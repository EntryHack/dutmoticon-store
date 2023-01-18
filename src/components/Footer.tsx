const Footer = () => {
  return (
    <footer className="bg-neutral-50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
        <img src="/logo.svg" className="h-8" />
        <div className="relative ml-4 h-full">
          <div className="border-[6px] border-[transparent_#126fff_transparent_transparent] absolute right-0 -top-[6px]" />
        </div>
        <div className="text-base text-white/90 font-medium bg-brand px-2 py-1 rounded-lg shadow-md">
          둣모티콘은
          <a className="underline decoration-dotted text-white" href="https://tica.fun" target="_blank">
            띠까
          </a>
          가만들었다!!!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
