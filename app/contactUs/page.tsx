import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { Mail, Clock3, MessageCircle, ShieldCheck } from "lucide-react";
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
            <span className="eyebrow">لنتحدث</span>
            <h2>
              أخبرنا
              <br />
              <em>عمّا يدور في ذهنك.</em>
            </h2>
            <p>
              ليس من الضروري أن تكون جميع التفاصيل جاهزة. ابدأ بالفكرة أو التحدي
              الذي ترغب في معالجته، وسنساعدك على استكمال الصورة معًا.
            </p>
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
                <MessageCircle size={19} />
              </span>
              <div>
                <small>موضوع الرسالة</small>
                <b>خدمات، تعاون، أو استفسار</b>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <Clock3 size={19} />
              </span>
              <div>
                <small>الخطوة التالية</small>
                <b>سنراجع تفاصيل طلبك و الرد عليك</b>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
