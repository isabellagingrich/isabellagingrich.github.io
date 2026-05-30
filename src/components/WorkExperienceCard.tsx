type WorkExperienceCardProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export default function WorkExperienceCard({
  title,
  company,
  location,
  period,
  bullets,
}: WorkExperienceCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-emerald-400 text-sm font-medium">{company}</p>
          <p className="text-slate-500 text-sm">{location}</p>
        </div>
        <span className="text-slate-400 text-sm whitespace-nowrap">{period}</span>
      </div>

      <ul className="space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
            <span className="text-emerald-400 mt-1 shrink-0">▹</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
