type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors duration-200">
      {/* Card header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} on GitHub`}
          className="text-slate-500 hover:text-emerald-400 transition-colors duration-150"
        >
          {/* External link icon (inline SVG — no icon library needed) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-slate-800 text-emerald-400 border border-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
