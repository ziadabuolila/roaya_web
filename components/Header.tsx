"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  X,
  Menu,
  CreditCard,
  Network,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

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
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1400px)");
    const onChange = () => {
      if (!mq.matches) {
        setMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
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
            {serviceLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={path === l.href ? "active" : ""}
              >
                {path === l.href && <l.icon size={20} className="nav-icon" />}
                <span className="nav-label">{l.label}</span>
              </Link>
            ))}
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
            aria-label={theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
            title={theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن"}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            className={`mobile-menu-trigger ${mobileMenuOpen ? "is-active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-panel"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className={`mobile-backdrop ${mobileMenuOpen ? "is-visible" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="إغلاق القائمة"
            tabIndex={mobileMenuOpen ? 0 : -1}
            aria-hidden={!mobileMenuOpen}
          />
          <nav
            id="mobile-menu-panel"
            className={`mobile-menu-nav ${mobileMenuOpen ? "is-open" : ""}`}
            aria-label="التنقل الرئيسي"
            aria-hidden={!mobileMenuOpen}
            dir="rtl"
            inert={!mobileMenuOpen}
          >
            <div className="mobile-nav-header">
              <Link
                className="brand"
                href="/"
                onClick={toggleMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
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
              <button
                type="button"
                className="mobile-close-btn"
                onClick={toggleMobileMenu}
                aria-label="إغلاق القائمة"
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                <X size={22} />
              </button>
            </div>
            <div className="mobile-nav-content">
              {links.slice(0, 4).map((l) => {
                const Icon = l.icon;
                const active =
                  path === l.href ||
                  (l.href !== "/" && path.startsWith(`${l.href}/`));

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`mobile-nav-link ${active ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <Icon size={20} className="menu-nav-icon" />
                    <span className="menu-nav-label">{l.label}</span>
                  </Link>
                );
              })}
              {serviceLinks.map((l) => {
                const Icon = l.icon;
                const active =
                  path === l.href || path.startsWith(`${l.href}/`);

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`mobile-nav-link ${active ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <Icon size={20} className="menu-nav-icon" />
                    <span className="menu-nav-label">{l.label}</span>
                  </Link>
                );
              })}
              {links.slice(4).map((l) => {
                const Icon = l.icon;
                const active =
                  path === l.href ||
                  (l.href !== "/" && path.startsWith(`${l.href}/`));

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`mobile-nav-link ${active ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <Icon size={20} className="menu-nav-icon" />
                    <span className="menu-nav-label">{l.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
