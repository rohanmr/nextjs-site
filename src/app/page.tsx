import Image from "next/image";

export default function HomePage() {
  const cardInfo = [
    {
      title: "Prime Locations",
      desc: "Carefully selected locations with high growth potential.",
    },
    {
      title: "Quality Construction",
      desc: "Built with premium materials and modern architecture.",
    },
    {
      title: "Transparent Process",
      desc: "Clear documentation and honest communication.",
    },
  ];
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="bg-linear-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto py-10 px-6 md:py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
              Trusted Real Estate Partner
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight gradient-text">
              Premium Living <br /> Spaces for Modern Life
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl text-left ">
              We develop thoughtfully designed residential and commercial
              properties that combine quality construction, prime locations, and
              long-term value.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                View Projects
              </button>
              <button className="border cursor-pointer border-slate-300 px-6 py-2 rounded-md font-medium text-slate-700 hover:bg-slate-100 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Building"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 bg-white shadow-lg rounded-lg px-6 py-4 border border-slate-200">
              <p className="text-sm font-semibold text-slate-600">
                Completed Projects
              </p>
              <p className="text-2xl font-bold text-center text-slate-800">
                25+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section id="about" className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
          {cardInfo.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}

      {/* CALL TO ACTION */}
      <section id="contact" className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Invest in Your Future?
          </h2>
          <p className="mt-4 text-blue-100 max-w-xl mx-auto">
            Schedule a site visit or talk to our experts to find the perfect
            property for you.
          </p>

          <button className="mt-8 cursor-pointer bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
}
