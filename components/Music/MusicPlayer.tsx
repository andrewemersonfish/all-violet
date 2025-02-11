const MusicPlayer = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Listen Now</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pt-[56.25%] w-full">
            <iframe
              src="https://open.spotify.com/embed/artist/3Tl61cVVcuxLyh41M9NA90?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
