"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Center navigation */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#features")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="https://doc.melify.io"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/showcase"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Showcase
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/community"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* CTA buttons */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                href="https://github.com/yourusername/melify"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm relative bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                ⭐ Star on GitHub
              </a>
            </li>
            <li>
              <a
                href="/documentation/quickstart"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                Get Started →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
