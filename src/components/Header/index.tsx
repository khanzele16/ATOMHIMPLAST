import { useState } from "react";
import { Menu, X } from "lucide-react";
import { routers } from "../../config/routers";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-[80px] w-full max-w-[1160px] items-center justify-between px-5 sm:px-8">
        <a
          href="/"
          className="font-extrabold text-[22px] sm:text-[25px] bg-gradient-to-r from-[#0087bd] to-[#009bd9] bg-clip-text text-transparent select-none"
        >
          АТОМХИМПЛАСТ
        </a>
        <nav className="hidden md:flex items-center text-[17px] font-medium gap-x-[30px]">
          {routers.map((router) => (
            <a
              key={router.path}
              href={router.path}
              className="relative text-gray-800 hover:text-[#0087bd] transition-colors duration-200"
            >
              {router.name}
              <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#0087bd] to-[#009bd9] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0087bd] hover:text-[#009bd9] transition"
          aria-label="Открыть меню"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`md:hidden absolute top-[80px] left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 text-[18px] font-medium">
          {routers.map((router) => (
            <li key={router.path}>
              <a
                href={router.path}
                className="block text-gray-800 hover:text-[#0087bd] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {router.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
