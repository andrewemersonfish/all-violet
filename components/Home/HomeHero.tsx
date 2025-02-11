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
            className="w-12 h-12 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full flex items-center justify-center transition-colors"
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
            className="w-12 h-12 bg-[#FA243C] hover:bg-[#fb3e52] text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Listen on Apple Music"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.344 16.174c-.32.85-.613 1.647-1.287 2.306-.88.864-1.787 1.018-2.726.513-.92-.493-1.8-.573-2.726 0-.973.597-1.787.426-2.666-.426-.92-.892-1.627-2.306-2.32-4.492-1.333-4.173-.88-7.636 1.033-9.069 1.353-1.005 2.706-.892 3.773.172.88.852 1.733.892 2.666.08 1.14-.98 2.374-1.13 3.654-.233 1.473 1.058 2.113 2.625 1.926 4.798-1.527.159-2.507 1.137-2.507 2.558 0 1.42.994 2.372 2.4 2.212.2.532.28.958.254 1.42l-.474.16zm-1.863-12.5c0 1.59-1.353 2.93-2.973 2.864-1.527-.053-2.826-1.444-2.706-2.93.12-1.59 1.42-2.824 3-2.758 1.513.053 2.679 1.337 2.679 2.824z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
