import { useEffect, useState } from "react";

type Mode = "light" | "dark";

export function applyTheme(mode: Mode) {
  const root = document.documentElement;
  root.classList.toggle("dark", mode === "dark");
  root.style.colorScheme = mode;
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setMode(current);
  }, []);

  if (!mode) {
    return <div className="h-6" aria-hidden />;
  }

  const next = mode === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(next);
        try {
          localStorage.setItem("theme", next);
        } catch {
          /* ignore */
        }
        setMode(next);
      }}
      aria-label={`Switch to ${next} mode`}
      className="w-fit text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
    >
      {mode === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
