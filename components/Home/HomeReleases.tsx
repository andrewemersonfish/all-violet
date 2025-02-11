import Image from 'next/image';
import houndstooth from '@/public/Houndstooth.jpg';
import changingPasture from '@/public/changing_pasture.jpg';

const HomeReleases = () => {
  const releases = [
    {
      title: "Latest Single",
      image: changingPasture,
      description: "Our newest release exploring themes of change and growth through pastoral soundscapes.",
      releaseDate: "March 2024",
    },
    {
      title: "Debut EP",
      image: houndstooth,
      description: "A collection of our first recordings, weaving together patterns of sound and rhythm.",
      releaseDate: "January 2024",
    },
    // Add more releases as needed
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Releases</h2>
        <div className="max-w-2xl mx-auto space-y-12">
          {releases.map((release, index) => (
            <div
              key={index}
              className="bg-violet-900/20 rounded-lg overflow-hidden hover:bg-violet-900/30 transition-colors"
            >
              <div className="aspect-square relative">
                <Image
                  src={release.image}
                  alt={release.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                <p className="text-gray-300 mb-4">{release.description}</p>
                <p className="text-sm text-violet-400">{release.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeReleases;
