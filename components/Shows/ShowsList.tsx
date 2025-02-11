const ShowsList = () => {
  const shows = [
    {
      date: "2024-04-15",
      venue: "The Purple Room",
      city: "New York, NY",
      ticketLink: "#",
      status: "On Sale",
    },
    {
      date: "2024-04-22",
      venue: "Sonic Stadium",
      city: "Los Angeles, CA",
      ticketLink: "#",
      status: "Sold Out",
    },
    {
      date: "2024-05-01",
      venue: "Melody Hall",
      city: "Chicago, IL",
      ticketLink: "#",
      status: "On Sale",
    },
    // Add more shows as needed
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {shows.map((show, index) => {
            const date = new Date(show.date);
            const formattedDate = date.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            });

            return (
              <div
                key={index}
                className="bg-violet-900/20 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <p className="text-xl font-semibold mb-2">{formattedDate}</p>
                  <p className="text-violet-400">{show.venue}</p>
                  <p className="text-gray-300">{show.city}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-sm ${
                    show.status === 'Sold Out' ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {show.status}
                  </span>
                  <a
                    href={show.ticketLink}
                    className={`inline-block px-6 py-2 rounded-full border ${
                      show.status === 'Sold Out'
                        ? 'border-gray-600 text-gray-600 cursor-not-allowed'
                        : 'border-violet-600 hover:bg-violet-600 transition-colors'
                    }`}
                    {...(show.status === 'Sold Out' && { 'aria-disabled': true })}
                  >
                    {show.status === 'Sold Out' ? 'Sold Out' : 'Get Tickets'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowsList;
