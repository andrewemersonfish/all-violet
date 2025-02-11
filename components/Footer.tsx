const Footer = () => {
  return (
    <footer className="bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">All Violet</h3>
            <p className="text-sm">
              Creating unforgettable musical experiences since [Year]
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-violet-400">Instagram</a>
              <a href="#" className="block hover:text-violet-400">Twitter</a>
              <a href="#" className="block hover:text-violet-400">Spotify</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Email: info@allviolet.com<br />
              Booking: booking@allviolet.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} All Violet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
