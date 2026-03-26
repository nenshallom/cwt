import { 
    FiLayout, 
    FiServer, 
    FiSmartphone, 
    FiCloud, 
    FiDatabase, 
    FiCpu 
  } from "react-icons/fi";
  
  export default function ServicesTechStack() {
    const techCategories = [
      {
        title: "Frontend",
        icon: <FiLayout className="h-6 w-6" />,
        color: "text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white",
        techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Backend",
        icon: <FiServer className="h-6 w-6" />,
        color: "text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white",
        techs: ["Node.js", "Python", "Java", "Go", ".NET", "PHP"],
      },
      {
        title: "Mobile",
        icon: <FiSmartphone className="h-6 w-6" />,
        color: "text-purple-600 bg-purple-50 group-hover:bg-purple-600 group-hover:text-white",
        techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
      },
      {
        title: "Cloud & DevOps",
        icon: <FiCloud className="h-6 w-6" />,
        color: "text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white",
        techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
      },
      {
        title: "Database",
        icon: <FiDatabase className="h-6 w-6" />,
        color: "text-rose-600 bg-rose-50 group-hover:bg-rose-600 group-hover:text-white",
        techs: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "MySQL"],
      },
      {
        title: "AI & Data",
        icon: <FiCpu className="h-6 w-6" />,
        color: "text-teal-600 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white",
        techs: ["TensorFlow", "PyTorch", "OpenAI", "Pandas", "Spark", "Scikit-learn"],
      },
    ];
  
    return (
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* HEADER AREA */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-syne text-sm font-bold uppercase w-fit tracking-wider text-blue-600 py-2 px-3 bg-blue-500/20 rounded-lg mx-auto mb-4">
              Technologies
            </h2>
            <h3 className="font-syne text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight mb-6">
              Our Tech Stack
            </h3>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              We leverage the latest and most reliable technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>
  
          {/* GRID AREA */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((category, index) => (
              <div 
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
              >
                {/* Category Header (Icon + Title) */}
                <div className="flex items-center gap-4 mb-6 border-b border-gray-50 pb-6">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h4 className="font-syne text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h4>
                </div>
  
                {/* Technologies (Rendered as Flex Pills) */}
                <div className="flex flex-wrap gap-2.5">
                  {category.techs.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-flex items-center rounded-lg bg-gray-50 px-3 py-1.5 font-inter text-sm font-medium text-gray-700 border border-gray-200 transition-colors hover:bg-white hover:border-blue-300 hover:text-blue-700 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }