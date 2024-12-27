import React, { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme-store";
import usersGlobalStore from "@/store/users-store";

import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

import { Menu, Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Button } from "../Button";
import CarmyLog from "@/assets/carmy-logo";

export function Header() {
  const { loggedInUserData }: any = usersGlobalStore();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { theme, setTheme } = useThemeStore();

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // Apply the theme to the document's root element
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header className="">
      <nav className="flex lg:flex-row flex-col items-center justify-between w-[92%] mx-auto py-4 transition-all">
        {/* Logo Section */}
        <div className="flex items-center justify-between lg:w-auto w-full mb-1 transition-all">
          <div>
            <Link href="/">
              <CarmyLog />
            </Link>
          </div>
          <div className="lg:hidden">
            <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
        <div className="lg:hidden flex w-full h-0.5 bg-text mt-2 mb-4" />

        <div className="flex flex-col justify-start lg:flex-row lg:items-center lg:justify-between w-full">
          <div
            className={`lg:flex flex-grow justify-start ${
              menuOpen ? "flex" : "hidden"
            } lg:block`}
          >
            <ul className="flex flex-row mx-auto space-x-8 list-none flex-wrap">
              <li>
                <Link
                  href="/"
                  className="hover:text-button text-text font-normal"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/repair-guide"
                  className="hover:text-button text-text font-normal"
                >
                  Repair Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/mechanic"
                  className="hover:text-button text-text font-normal"
                >
                  Virtual Mechanic
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-button text-text font-normal"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-button text-text font-normal"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              background="bg-button"
              title="Get your scanner here"
              color="text-white"
            />
            <Button
              background="bg-button"
              title={`${loggedInUserData ? "" : "Sign in/Up"}`}
              color="text-white"
              py={`${loggedInUserData ? "py-0.5" : ""}`}
              px={`${loggedInUserData ? "px-0.5" : ""}`}
              to="/sign-in"
            >
              {loggedInUserData ? (
                <div className="w-7 h-7 rounded-full border">
                  <UserButton />
                </div>
              ) : (
                ""
              )}
            </Button>

            <div
              className="p-2 bg-button rounded-full text-white"
              onClick={toggleTheme}
            >
              {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
            </div>
          </div>

          {menuOpen && (
            <div className="flex justify-start w-full lg:hidden p-4">
              <div className="flex flex-col space-y-2">
                <Button
                  background="bg-button"
                  title="Get your scanner here"
                  color="text-white"
                />
                <Button
                  background="bg-button"
                  title="Sign in/Up"
                  color="text-white"
                  py="py-0.5"
                  to="/sign-in"
                >
                  <div className="w-7 h-7 rounded-full border">
                    <UserButton />
                  </div>
                </Button>
                <div
                  className="flex justify-between p-2 bg-button rounded-full text-white"
                  onClick={toggleTheme}
                >
                  <span className="text-xs">Light/dark mode</span>
                  {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
