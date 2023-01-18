import Link from "next/link";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-b-neutral-100">
      <div className="flex items-center max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" className="h-10 mr-2" />
          <h1 className="text-[26px] font-semibold leading-6">Dutmoticon 스토어</h1>
        </Link>
        <div className="flex items-center ml-auto">
          <Link
            href="/upload"
            className="text-lg font-semibold px-6 py-3 leading-4 rounded-lg bg-brand text-white shadow-md"
          >
            내 이모티콘 올리기
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
