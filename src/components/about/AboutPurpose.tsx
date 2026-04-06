export default function AboutPurpose() {
    const purposes = [
      {
        id: "01",
        tag: "INNOVATION WITH PURPORSE",
        title: "Our Mission",
        description: "To empower the next generation of digital warriors through cutting edge software solutions and transformative tech education creating a world where innovation is accessible, impactful and inclusive",
        color: "text-brand-purple",
        bgColor: "bg-brand-purple/10",
        borderColor: "border-gray-50",
      },
      {
        id: "02",
        tag: "EXCELLENCE IN EXECUTION",
        title: "Our Vision",
        description: "To Build worldclass software, that solves real world problems and deliver high impact Tech training that unlocks human potentia",
        color: "text-brand-purple", 
        bgColor: "bg-brand-purple/10",
        borderColor: "border-indigo-100",
      }
    ];
  
    return (
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          {/* HEADER AREA */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h3 className="font-syne text-3xl font-bold tracking-tight text-brand-indigo sm:text-4xl">
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
                <h4 className="mb-4 font-syne text-3xl font-bold text-brand-indigo">
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