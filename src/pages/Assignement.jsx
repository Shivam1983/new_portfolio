export default function Assignement() {
  const assignments = [
    { title: "Data Science Assignment", link: "#" },
    { title: "Internal 1", link: "#" },
    { title: "Internal 2", link: "#" },
    { title: "3rd Assignment", link: "#" },
    { title: "End Sem Paper Solution", link: "#" },
  ];

  return (
    <div className="min-h-screen py-12 bg-transparent px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Assignments</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((a, i) => (
            <div key={i} className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 shadow-md">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{a.title}</h3>
              <p className="text-sm text-gray-300 mb-4">YouTube Link
                <span className="ml-2 inline-block text-cyan-300 font-extrabold text-lg animate-bounce" aria-hidden>⬇</span>
              </p>
              <a href={a.link} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/30 hover:scale-105 transition-transform text-sm">
                Open Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
