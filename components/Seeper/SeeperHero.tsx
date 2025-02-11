import Image from 'next/image';
import milletSheep from '@/public/millet_sheep.jpeg';

const SeeperHero = () => {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center">
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
        <h1 className="text-7xl text-white title-text">
          SEEPER GALLERY
        </h1>
      </div>
    </div>
  );
};

export default SeeperHero;
