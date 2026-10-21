import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, PhoneCall, ShieldCheck } from "lucide-react";
export const metadata: Metadata = { title: "تواصل معنا" };
export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="تواصل معنا"
        title="كل بداية ناجحة"
        highlight="تبدأ بحوار."
        desc="سواء أكان لديك مشروع جديد أم كنت تبحث عن حل تقني، شاركنا التفاصيل لنبدأ بفهم احتياجاتك."
        number="07"
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-aside">
            <span className="eyebrow">نحن هنا لخدمتك</span>
            <h2>
              يسعدنا
              <br />
              <em>التواصل معك.</em>
            </h2>
            <p>
              لا تترددوا في التواصل معنا لأي استفسار أو طلب دعم. نحن في انتظاركم، وفي خدمتكم دائمًا.
            </p>
            <div className="contact-method contact-method-address">
              <span>
                <MapPin size={19} />
              </span>
              <div>
                <small>العنوان</small>
                <b>17 شارع صلاح الدين الشرقي، بجوار بنك القاهرة</b>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <Mail size={19} />
              </span>
              <div>
                <small>البريد الإلكتروني</small>
                <a href="mailto:roya.tech2025@gmail.com">
                  roya.tech2025@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <Phone size={19} />
              </span>
              <div>
                <small>خدمة العملاء</small>
                <a href="tel:01155660300" dir="ltr">01155660300</a>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <PhoneCall size={19} />
              </span>
              <div>
                <small>الخط الأرضي</small>
                <a href="tel:0483432109" dir="ltr">0483432109</a>
              </div>
            </div>
            <div className="contact-assurance">
              <ShieldCheck size={17} />
              <span>بياناتك ورسالتك محل اهتمامنا، وسنتواصل معك في أقرب وقت.</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="section contact-map-section">
        <div className="container">
          <div className="contact-map-heading">
            <span className="eyebrow">موقعنا</span>
            <h2>يسعدنا زيارتكم</h2>
            <p>تجدوننا في 17 شارع صلاح الدين الشرقي، بجوار بنك القاهرة.</p>
          </div>
          <div className="contact-map-shell">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d861.1940981319874!2d30.979871460012102!3d30.300426746454765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE4JzAwLjQiTiAzMMKwNTgnNDcuMSJF!5e0!3m2!1sar!2seg!4v1750063770603!5m2!1sar!2seg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع شركة رؤية باي"
              className="contact-map-frame"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
