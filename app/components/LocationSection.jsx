export default function LocationSection() {
  const locations = [
    { city: 'London', count: '120+ events' },
    { city: 'Manchester', count: '85+ events' },
    { city: 'Birmingham', count: '70+ events' },
    { city: 'Leeds', count: '45+ events' },
    { city: 'Liverpool', count: '40+ events' },
    { city: 'Bristol', count: '35+ events' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Shoot</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving birthday celebrations across the UK
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-xl overflow-hidden aspect-video flex items-center justify-center text-gray-500">
              [UK Map with Service Areas]
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Our Coverage Areas
            </h3>
            <p className="text-gray-600 mb-8">
              We travel across the UK to capture your special day. While we&apos;re based in
              London, we regularly photograph birthdays in all major cities and can
              arrange travel to your location.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-fuchsia-300 transition duration-300"
                >
                  <h4 className="font-bold text-gray-800">{location.city}</h4>
                  <p className="text-sm text-gray-600">{location.count}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Travel Fees</h4>
              <p className="text-gray-600">
                Locations outside London may incur additional travel fees. Contact us
                for a personalized quote based on your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}