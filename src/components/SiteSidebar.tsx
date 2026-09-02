import { Link } from "@tanstack/react-router";
import portrait from "@/assets/sheng-portrait.jpg";
import diving from "@/assets/gallery-diving.jpg";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Elsewhere" },
] as const;

export function SiteSidebar() {
  return (
    <aside className="lg:sticky lg:top-16 lg:h-fit">
      <div className="flex flex-col items-center gap-8 px-6 py-12 text-center lg:items-start lg:px-0 lg:py-0 lg:text-left">
        <div className="group relative h-40 w-40 overflow-hidden rounded-full border border-foreground/5 bg-secondary shadow-sm">
          
          <img
            src={portrait}
            alt="Portrait of Sheng Liu"
            width={160}
            height={160}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
          />
          <img
            src={diving}
            alt="Sheng Liu diving"
            width={160}
            height={160}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          />
        </div>

        <div>
          <h1 className="text-3xl tracking-tight">Sheng Liu</h1>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground/90">
            Postdoctoral Researcher, Stanford University
          </p>
          <a href="mailto:shengl@stanford.edu" className="mt-4 inline-block text-sm font-medium text-primary link-quiet">
            shengl at stanford dot edu
          </a>
        </div>

        <nav className="flex flex-col items-center gap-3 lg:items-start">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="w-fit border-b border-transparent text-sm text-foreground/55 transition-colors hover:border-primary/20 hover:text-primary [&.active]:border-primary/30 [&.active]:text-primary"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-5 lg:flex-col lg:gap-2">
          {[
            { href: "https://scholar.google.com/citations?hl=en&user=rzhzR-cAAAAJ", label: "Scholar" },
            { href: "https://github.com/shengliu66", label: "GitHub" },
            { href: "https://twitter.com", label: "Twitter" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-fit border-b border-transparent text-sm text-foreground/55 transition-colors hover:border-primary/20 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </aside>
  );
}
