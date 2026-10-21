"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import {
  Menu,
  ChevronDown,
  X,
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
  Blocks,
  Network,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/about", label: "عن الشركة", icon: Building2 },
  { href: "/team", label: "إدارة الشركة", icon: Users },
  { href: "/developers", label: "المطورون", icon: Code2 },
  { href: "/programs", label: "برامجنا", icon: Award },
  { href: "/partners", label: "شركاؤنا", icon: Handshake },
  { href: "/fag", label: "أسئلة شائعة", icon: HelpCircle },
  { href: "/customerService", label: "تقديم بلاغ", icon: AlertCircle },
  {
    href: "/contactUs",
    label: "تواصل للاستفسار",
    icon: MessageSquare,
  },
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

export default function MobileMenu() {
  const path = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, []);

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
      return;
    }

    setMenuOpen(true);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [path, closeMenu]);

  useEffect(() => {
    if (!dropdownOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [dropdownOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      {/* زر فتح القائمة */}
      <button
        type="button"
        className={`mobile-menu-trigger ${menuOpen ? "is-active" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu-panel"
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      {mounted && createPortal(
        <>
          {/* خلفية تغطي الصفحة بالكامل */}
          <button
            type="button"
            className={`mobile-backdrop ${menuOpen ? "is-visible" : ""}`}
            onClick={closeMenu}
            aria-label="إغلاق القائمة"
            tabIndex={menuOpen ? 0 : -1}
            aria-hidden={!menuOpen}
          />

          {/* القائمة الجانبية */}
          <nav
            id="mobile-menu-panel"
            className={`mobile-menu-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="التنقل الرئيسي"
            aria-hidden={!menuOpen}
            dir="rtl"
            inert={!menuOpen}
          >
        {/* رأس القائمة */}
        <div className="mobile-nav-header">
          <Link
            className="brand"
            href="/"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
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
            onClick={closeMenu}
            aria-label="إغلاق القائمة"
            tabIndex={menuOpen ? 0 : -1}
          >
            <X size={22} />
          </button>
        </div>

        {/* روابط القائمة */}
        <div className="mobile-nav-content">
          {links.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const active =
              path === item.href ||
              (item.href !== "/" && path.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${active ? "active" : ""}`}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <Icon size={20} className="menu-nav-icon" />
                <span className="menu-nav-label">{item.label}</span>
              </Link>
            );
          })}

          {/* الخدمات */}
          <div className="nav-dropdown" ref={servicesDropdownRef}>
            <button
              type="button"
              className={`dropdown-toggle ${dropdownOpen ? "is-open" : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
              aria-controls="mobile-services-dropdown"
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="dropdown-title">
                <Blocks size={20} className="menu-nav-icon" />
                <span className="menu-nav-label">خدماتنا</span>
              </span>

              <ChevronDown
                size={18}
                className="dropdown-arrow"
                aria-hidden="true"
              />
            </button>

            <div
              id="mobile-services-dropdown"
              className={`dropdown-menu ${dropdownOpen ? "is-open" : ""}`}
              aria-hidden={!dropdownOpen}
              inert={!dropdownOpen}
            >
              <div className="dropdown-inner">
                {serviceLinks.map((item) => {
                  const Icon = item.icon;
                  const active =
                    path === item.href || path.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`service-nav-link ${active ? "active" : ""}`}
                      onClick={closeMenu}
                      tabIndex={menuOpen && dropdownOpen ? 0 : -1}
                    >
                      <Icon size={17} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {links.slice(4).map((item) => {
            const Icon = item.icon;
            const active =
              path === item.href ||
              (item.href !== "/" && path.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${active ? "active" : ""}`}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <Icon size={20} className="menu-nav-icon" />
                <span className="menu-nav-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
          </nav>
        </>,
        document.body,
      )}
    </>
  );
}
