export default function AboutStats() {
    const stats = [
      {
        value: "50+",
        label: "Projects Completed",
        subtext: "Successfully delivered across industries",
      },
      {
        value: "30+",
        label: "Happy Clients",
        subtext: "Trusted by businesses worldwide",
      },
      {
        value: "5+",
        label: "Years Experience",
        subtext: "Building reliable software solutions",
      },
      {
        value: "99%",
        label: "Client Satisfaction",
        subtext: "Consistently exceeding expectations",
      },
    ];
  
    return (
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          
          {/* HEADER AREA */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-syne text-sm font-bold uppercase  tracking-wider text-blue-600 mb-4">
              By The Numbers
            </h2>
            <h3 className="font-syne text-3xl font-bold tracking-tight text-black sm:text-4xl mb-6">
              Proven Track Record of Success
            </h3>
            <p className="font-inter text-lg text-slate-400 leading-relaxed">
              Our numbers speak for themselves. We consistently deliver results that drive business growth and client satisfaction.
            </p>
          </div>
  
          {/* STATS GRID */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 divide-y divide-slate-800 md:divide-y-0 md:divide-x">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center ${index !== 0 ? 'pt-8 md:pt-0' : ''}`}
              >
                <div className="font-syne text-5xl font-black text-blue-500 sm:text-6xl tracking-tight mb-4">
                  {stat.value}
                </div>
                
                {/* Main Label */}
                <h4 className="font-syne text-xl font-bold text-white mb-2">
                  {stat.label}
                </h4>
                
                {/* Subtext */}
                <p className="font-inter text-sm text-slate-400 leading-relaxed max-w-[200px]">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }