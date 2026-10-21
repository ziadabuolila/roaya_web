import Link from "next/link";
import { ArrowUpLeft, Zap, Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="eyebrow light">خطوتك التالية تبدأ هنا</span>
            <h2>
              هل لديك فكرة؟
              <br />
              <em>حوّلها إلى واقع.</em>
            </h2>
          </div>
          <Link className="button button-light" href="/contactUs">
            أخبرنا عن مشروعك <ArrowUpLeft size={17} />
          </Link>
          <div className="footer-orb" />
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand brand-footer" href="/">
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
            <p>
              نصنع حلولًا رقمية تساعد الأعمال على التحرك بثقة، وتحوّل التعقيد
              إلى تجربة أبسط.
            </p>
          </div>
          <div>
            <h4>اكتشف رؤية باي</h4>
            <Link href="/about">عن الشركة</Link>
            <Link href="/team">إدارة الشركة</Link>
            <Link href="/developers">المطورون</Link>
            <Link href="/programs">برامجنا</Link>
            <Link href="/partners">شركاؤنا</Link>
          </div>
          <div>
            <h4>خدماتنا</h4>
            <Link href="/services#payments">حلول الدفع</Link>
            <Link href="/services#software">تطوير البرمجيات</Link>
            <Link href="/services#integration">الربط والتكامل</Link>
            <Link href="/fag">الأسئلة الشائعة</Link>
          </div>
          <div className="footer-contact">
            <h4>تواصل معانا</h4>
            <a href="mailto:roya.tech2025@gmail.com">
              <Mail size={16} />
              roya.tech2025@gmail.com
            </a>
            <a href="/contactUs">
              <Phone size={16} />
              الاستفسار : 01155660300
            </a>
            <a href="/customerService">
              <Zap size={16} />
              خدمة العملاء
            </a>
            <span>
              <MapPin size={16} />
              مصر
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} رؤية باي. جميع الحقوق محفوظة.
          </span>
        </div>
      </div>
    </footer>
  );
}
