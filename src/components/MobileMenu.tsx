import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="hover:cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div
        className={`bg-background/90 fixed top-0 right-0 z-50 h-full w-2/5 backdrop-blur-sm transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col gap-6 p-6">
          <Button
            variant="outline"
            className="self-end hover:cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button variant="outline" className="hover:cursor-pointer">
            Отследить посылку →
          </Button>

          <nav className="font-medium">
            <ul className="flex flex-col items-start gap-4 lg:gap-8">
              <li>
                <a href="/" className="hover:underline">
                  Главная
                </a>
              </li>
              <li>
                <a href="services" className="hover:underline">
                  Услуги
                </a>
              </li>
              <li>
                <a href="about" className="hover:underline">
                  О нас
                </a>
              </li>
              <li>
                <a href="contacts" className="hover:underline">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
