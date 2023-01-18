import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="min-h-[72px] 0.5md:min-h-[64px]" />
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-b-neutral-100">
        <div className="flex items-center max-w-7xl mx-auto px-10 0.5md:px-6 py-4">
          <Link href="/" className="flex items-center 0.5md:mx-auto">
            <img src="/logo.svg" className="h-10 0.5md:h-8 mr-2" />
            <h1 className="text-[26px] 0.5md:text-[23px] font-semibold leading-6">Dutmoticon 스토어</h1>
          </Link>
          <div className="flex items-center ml-auto 0.5md:hidden">
            <Link
              href="/upload"
              className="text-lg font-semibold px-6 py-3 leading-4 rounded-lg bg-brand text-white shadow-md"
            >
              내 이모티콘 올리기
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
