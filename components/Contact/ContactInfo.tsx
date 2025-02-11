'use client';

const ContactInfo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-violet-900/20 rounded-lg p-12 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Location</h2>
              <p className="text-gray-300">New York, NY</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Email</h2>
              <a 
                href="mailto:allvioletband@gmail.com" 
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                allvioletband@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
