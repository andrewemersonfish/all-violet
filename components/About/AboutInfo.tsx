const AboutInfo = () => {
  const bandMembers = [
    {
      name: "Member Name",
      instrument: "Lead Vocals / Guitar",
      bio: "Brief bio about the band member...",
    },
    {
      name: "Member Name",
      instrument: "Bass / Backing Vocals",
      bio: "Brief bio about the band member...",
    },
    {
      name: "Member Name",
      instrument: "Drums",
      bio: "Brief bio about the band member...",
    },
    // Add more members as needed
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-4">
              All Violet formed in [Year] when a group of musicians united by their
              love for alternative rock and experimental sounds came together in
              [City].
            </p>
            <p className="text-lg mb-4">
              Since then, we've been crafting our unique sound, blending
              atmospheric textures with powerful rhythms and meaningful lyrics.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12">Meet the Band</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bandMembers.map((member, index) => (
              <div
                key={index}
                className="bg-violet-900/20 rounded-lg p-6 hover:bg-violet-900/30 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-violet-400 mb-4">{member.instrument}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
