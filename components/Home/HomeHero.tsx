import Image from 'next/image';
import milletSheep from '@/public/millet_sheep.jpeg';

const HomeHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={milletSheep}
          alt="Pastoral scene with sheep and haystacks"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-white title-text mb-12">
          ALL VIOLET
        </h1>
        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://open.spotify.com/artist/3Tl61cVVcuxLyh41M9NA90?si=wNpxPcd2S92J_BOa1_xztQ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black rounded-full flex items-center justify-center transition-colors"
            aria-label="Listen on Spotify"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
          <a
            href="https://music.apple.com/us/artist/all-violet/1742844564"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black rounded-full flex items-center justify-center transition-colors"
            aria-label="Listen on Apple Music"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98 1.09-2.12 1.15-3.23.52-1.14-.65-2.19-.67-3.4 0-1.36.77-2.07.53-3.14-.63C3.33 14.85 4.66 6.32 9.41 6c1.19.05 2.06.59 2.82.61.76.02 1.74-.58 3.08-.62 2.65-.08 4.15 1.61 4.15 1.61s-2.44 1.48-2.44 4.28c0 3.42 2.95 4.51 2.95 4.51s-1.85 4.37-2.92 3.89zM15.2 3.4c1.05-1.47.91-3.4-.41-4.4-1.46 1.01-1.67 2.94-.5 4.42"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/allvioletwastaken"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black rounded-full flex items-center justify-center transition-colors"
            aria-label="Follow on Instagram"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com/@allvioletwastaken"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black rounded-full flex items-center justify-center transition-colors"
            aria-label="Subscribe on YouTube"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="https://tiktok.com/@allvioletwastaken"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white hover:bg-gray-100 text-black rounded-full flex items-center justify-center transition-colors"
            aria-label="Follow on TikTok"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
