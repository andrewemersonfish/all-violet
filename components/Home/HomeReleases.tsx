import Image from 'next/image';
import houndstooth from '@/public/Houndstooth.jpg';
import myWayBackHome from '@/public/my_way_back_home_cover_art.jpg';

const HomeReleases = () => {
  const releases = [
    {
      title: "My Way Back Home",
      image: myWayBackHome,
      releaseDate: "November 2024",
    },
    {
      title: "Neon Seeping From The Pavement",
      image: houndstooth,
      releaseDate: "TBD",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Releases</h2>
        <div className="space-y-12">
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
