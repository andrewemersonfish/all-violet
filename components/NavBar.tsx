import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              All Violet
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:text-violet-400 px-3 py-2">
                Home
              </Link>
              <Link href="/shows" className="hover:text-violet-400 px-3 py-2">
                Shows
              </Link>
              <Link href="/music" className="hover:text-violet-400 px-3 py-2">
                Music
              </Link>
              <Link href="/contact" className="hover:text-violet-400 px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
