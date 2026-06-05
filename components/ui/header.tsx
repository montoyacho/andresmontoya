"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import { FiMenu, FiX } from "react-icons/fi";

function ClockCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Bogota",
  });

  return (
    <div className="min-w-[13rem] rounded-3xl border border-slate-700/70 bg-slate-900/95 px-4 py-3 text-sm text-slate-100 shadow-xl shadow-slate-950/20 backdrop-blur-sm">
      <div className="flex items-baseline justify-between gap-3 whitespace-nowrap">
        <div className="text-xs uppercase tracking-[0.22em] text-slate-500">
          BOGOTÁ
        </div>
        <div className="text-xl font-semibold text-cyan-300">
          {formattedTime}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname() || "/";

  const navItems = [
    { label: "INICIO", href: "/" },
    { label: "SOBRE MÍ", href: "/sobre-mi" },
    { label: "CASOS DE ÉXITO", href: "/proyectos" },
    { label: "HABILIDADES", href: "/habilidades" },
    { label: "CONTACTO", href: "/contacto" },
  ];

  const navRef = useRef<HTMLUListElement | null>(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [lockedHref, setLockedHref] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const moveIndicator = (link: HTMLAnchorElement | null) => {
    if (!link) {
      setIndicator({ left: 0, width: 0, opacity: 0 });
      return;
    }

    const text = link.querySelector("span") as HTMLSpanElement | null;

    const width = text ? text.offsetWidth + 10 : link.offsetWidth;
    const left = text
      ? link.offsetLeft + text.offsetLeft - 5
      : link.offsetLeft;

    setIndicator({
      left,
      width,
      opacity: 1,
    });
  };

  const restoreActiveIndicator = () => {
    const nav = navRef.current;
    if (!nav) return;

    const links = Array.from(nav.querySelectorAll("a")) as HTMLAnchorElement[];

    // prefer locked href (user clicked) while navigation is pending
    let activeLink: HTMLAnchorElement | undefined;
    if (lockedHref) {
      activeLink = links.find((l) => l.getAttribute("href") === lockedHref);
    }

    if (!activeLink) {
      activeLink = links.find((link) => {
        const href = link.getAttribute("href") || "";
        if (href === "/") return pathname === "/";
        return href !== "/" && pathname.startsWith(href);
      }) as HTMLAnchorElement | undefined;
    }

    moveIndicator(activeLink || null);
  };

  useLayoutEffect(() => {
    restoreActiveIndicator();

    window.addEventListener("resize", restoreActiveIndicator);

    return () => {
      window.removeEventListener("resize", restoreActiveIndicator);
    };
  }, [pathname]);

  // clear locked href when navigation completed (pathname updated)
  useEffect(() => {
    if (!lockedHref) return;
    if (pathname.startsWith(lockedHref)) setLockedHref(null);
  }, [pathname, lockedHref]);

  // close mobile menu when navigating
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/90 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-xl">
      <div className="w-full px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          <nav className="flex flex-1 items-center justify-center">
            {/* Desktop nav */}
            <ul
              ref={navRef}
              className="relative hidden sm:flex items-center justify-center gap-3 text-sm font-semibold text-slate-200"
            >
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onMouseEnter={(e) => moveIndicator(e.currentTarget)}
                      onMouseLeave={restoreActiveIndicator}
                      onClick={() => setLockedHref(item.href)}
                      className={`relative inline-flex rounded-full px-3 py-2 transition-all duration-300 ${
                        active
                          ? "font-extrabold text-white"
                          : "font-semibold text-slate-300 hover:text-white"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}

              <span
                className="pointer-events-none absolute -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 ease-out"
                style={{
                  left: `${indicator.left}px`,
                  width: `${indicator.width}px`,
                  opacity: indicator.opacity,
                }}
              />
            </ul>

            {/* Mobile: hamburger button */}
            <div className="sm:hidden">
              <button
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800/50"
              >
                {mobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile menu drawer */}
            {mobileOpen && (
              <div
                id="mobile-menu"
                className="absolute left-0 top-full z-50 w-full bg-gray-950/95 border-t border-white/5 shadow-lg sm:hidden"
              >
                <div className="px-4 py-4">
                  <ul className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => {
                            setLockedHref(item.href);
                            setMobileOpen(false);
                          }}
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800/40"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-center">
                    <ClockCard />
                  </div>
                </div>
              </div>
            )}
          </nav>

          <div className="hidden sm:flex items-center">
            <ClockCard />
          </div>
        </div>
      </div>
    </header>
  );
}