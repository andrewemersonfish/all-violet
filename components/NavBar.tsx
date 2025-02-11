import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-baseline space-x-8">
            <Link href="/" className="hover:text-violet-400 px-3 py-2">
              Home
            </Link>
            <Link href="/shows" className="hover:text-violet-400 px-3 py-2">
              Shows
            </Link>
            <Link href="/music" className="hover:text-violet-400 px-3 py-2">
              Music
            </Link>
            <Link href="/seeper" className="hover:text-violet-400 px-3 py-2">
              Seeper Gallery
            </Link>
            <Link href="/contact" className="hover:text-violet-400 px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
