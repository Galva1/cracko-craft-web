import { ThemeContext } from "@/app/api/provider/theme-provider";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,  faSun , faMoon} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menubar, toggleMenuBar] = useState(false);

  const handleMenu = () => {
    toggleMenuBar((prev) => !prev);
  };

  return (
<header className= " w-full border-b-2 z-50 fixed  bg-(--color-primary)  text-gray-900 ">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src="/images/logo.png"
            width={150}
            height={65}
            alt="Cracko Craft"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Toggle theme */}
          <button
            onClick={toggleTheme}
            className="text-2xl md:hover:text-orange-500"
          >
            {theme === "dark" ?  <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex">
              <li>
                <Link
                  href="#news"
                  className="block px-6 py-4 border-r border-gray-200 hover:bg-gray-100"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block px-6 py-4 border-r border-gray-200 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block px-6 py-4 hover:bg-gray-100"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-xl"
            onClick={handleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`${menubar ? "block" : "hidden"} md:hidden bg-(--color-secondary) border-t border-gray-200 px-4`}> 
        <ul className="flex flex-col">
          <li>
            <Link
              href="#news"
              className="block px-6 py-4 border-b border-gray-300 hover:bg-gray-100 text-(--color-content)" 
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block px-6 py-4 border-b border-gray-300 hover:bg-gray-100 text-(--color-content)"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="block px-6 py-4 hover:bg-gray-100 text-(--color-content)"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

