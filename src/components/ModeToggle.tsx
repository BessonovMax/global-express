import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const STORAGE_KEY = "theme"; // 'light' | 'dark'

export function ModeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  // On mount: read from localStorage or system
  React.useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as
      | "light"
      | "dark"
      | null;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // First visit → follow system
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initialTheme = systemPrefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  // When theme changes, apply class and save to localStorage
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2 md:gap-1">
      {theme === "dark" ? (
        <Moon className="text-foreground h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5 text-white" />
      )}
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
        className="cursor-pointer"
      />
    </div>
  );
}
