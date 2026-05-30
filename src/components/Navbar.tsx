type NavbarProps = {
  activeSection: string;
};

const navLinks = ["home", "experience", "projects", "about", "contact"];

export default function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
      <span className="text-white font-bold text-lg tracking-tight">
        isabella<span className="text-emerald-400">.</span>dev
      </span>

      <nav className="flex gap-6">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => document.getElementById(link)?.scrollIntoView({ behavior: "smooth" })}
            className={`capitalize text-sm transition-colors duration-150 ${
              activeSection === link
                ? "text-emerald-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {link}
          </button>
        ))}
      </nav>
    </header>
  );
}
