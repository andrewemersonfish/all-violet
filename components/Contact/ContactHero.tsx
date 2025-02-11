import Image from 'next/image';
import changingPasture from '@/public/changing_pasture.jpg';

const ContactHero = () => {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={changingPasture}
          alt="Pastoral scene with cows in a field"
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
        <h1 className="text-7xl font-bold text-white drop-shadow-lg">
          Contact
        </h1>
      </div>
    </div>
  );
};

export default ContactHero;
