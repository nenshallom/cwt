export default function AboutPurpose() {
    const purposes = [
      {
        id: "01",
        tag: "INNOVATE & DELIVER",
        title: "Our Mission",
        description: "To empower businesses with innovative and cutting edge digital solutions that enhance efficiency, productivity, and competitiveness. We strive to deliver tailored software that solves real world problems and drives measurable growth for every client we serve.",
        color: "text-brand-purple",
        bgColor: "bg-brand-purple/10",
        borderColor: "border-gray-50",
      },
      {
        id: "02",
        tag: "LEAD & INSPIRE",
        title: "Our Vision",
        description: "To become a globally recognized leader in software innovation, setting the standard for excellence in digital transformation. We envision a future where every business, regardless of size, has access to world-class technology solutions that unlock their full potential.",
        color: "text-brand-purple", 
        bgColor: "bg-brand-purple/10",
        borderColor: "border-indigo-100",
      }
    ];
  
    return (
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          {/* HEADER AREA */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="hidden font-syne text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
              Our Purpose
            </h2>
            <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mission & Vision
            </h3>
          </div>
  
          {/* 2-COLUMN GRID */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {purposes.map((item, index) => (
              <div 
                key={index}
                className={`group relative flex flex-col rounded-3xl border ${item.borderColor} bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10`}
              >
                {/* Top Row: Number Badge & Tag */}
                <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgColor} ${item.color} font-syne text-2xl font-bold transition-transform duration-300 group-hover:scale-110`}>
                    {item.id}
                  </div>
                  <span className={`rounded-full px-4 py-1.5 font-inter text-xs font-bold tracking-wider uppercase ${item.bgColor} ${item.color}`}>
                    {item.tag}
                  </span>
                </div>
  
                {/* Text Content */}
                <h4 className="mb-4 font-syne text-3xl font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="flex-1 font-inter text-lg leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }