"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Sun,
  Moon,
  Home,
  Building2,
  Users,
  Code2,
  Award,
  Handshake,
  HelpCircle,
  AlertCircle,
  MessageSquare,
  CreditCard,
  Network,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/about", label: "عن الشركة", icon: Building2 },
  { href: "/team", label: "إدارة الشركة", icon: Users },
  { href: "/developers", label: "المطورون", icon: Code2 },
  { href: "/programs", label: "برامجنا", icon: Award },
  { href: "/partners", label: "شركاؤنا", icon: Handshake },
  { href: "/fag", label: "أسئلة شائعة", icon: HelpCircle },
  { href: "/customerService", label: "تقديم بلاغ", icon: AlertCircle },
  { href: "/contactUs", label: "تواصل للاستفسار", icon: MessageSquare },
];

const serviceLinks = [
  {
    href: "/services/payments",
    label: "حلول الدفع الإلكتروني",
    icon: CreditCard,
  },
  {
    href: "/services/software",
    label: "تطوير البرمجيات",
    icon: Code2,
  },
  {
    href: "/services/integration",
    label: "الربط والتكامل",
    icon: Network,
  },
];

export default function Header() {
  const path = usePathname();
  const { toggleTheme } = useTheme();
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="رؤية باي - الرئيسية">
            <span className="brand-symbol">
            <img
              src="/images/logo_roaya.png"
              alt="رؤية باي"
              className="brand-logo"
            />
          </span>
            <span className="brand-copy">
              <b>
                رؤية <i>باي</i>
              </b>
              <small>حلول السداد والبرمجيات</small>
            </span>
          </Link>
          <nav className="nav-links" aria-label="التنقل الرئيسي">
            {links.slice(0, 4).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={path === l.href ? "active" : ""}
              >
                {path === l.href && <l.icon size={20} className="nav-icon" />}
                <span className="nav-label">{l.label}</span>
              </Link>
            ))}
            <div className="nav-dropdown" ref={servicesMenuRef}>
              <button
                type="button"
                className={`dropdown-toggle ${servicesOpen ? "is-open" : ""} ${serviceLinks.some((l) => path === l.href || path.startsWith(`${l.href}/`)) ? "active" : ""}`}
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
                aria-controls="header-services-menu"
              >
                <span>خدماتنا</span>
                <ChevronDown size={15} className="dropdown-arrow" aria-hidden="true" />
              </button>
              <div
                id="header-services-menu"
                className={`dropdown-menu ${servicesOpen ? "is-open" : ""}`}
                aria-hidden={!servicesOpen}
                inert={!servicesOpen}
              >
                {serviceLinks.map((l) => {
                  const Icon = l.icon;
                  const active = path === l.href || path.startsWith(`${l.href}/`);
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={active ? "active" : ""}
                      onClick={() => setServicesOpen(false)}
                      tabIndex={servicesOpen ? 0 : -1}
                    >
                      <Icon size={16} aria-hidden="true" />
                      <span>{l.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            {links.slice(4).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={path === l.href ? "active" : ""}
              >
                {path === l.href && <l.icon size={20} className="nav-icon" />}
                <span className="nav-label">{l.label}</span>
              </Link>
            ))}
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="تغيير وضع العرض"
            title="تغيير وضع العرض"
          >
            <Sun size={17} className="theme-icon-sun" aria-hidden="true" />
            <Moon size={17} className="theme-icon-moon" aria-hidden="true" />
          </button>
          {path !== "/menu" && <MobileMenu />}
        </div>
      </header>
    </>
  );
}
