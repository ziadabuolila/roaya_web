import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA } from "@/components/Sections";
import FaqList from "@/components/FaqList";
import { MessageCircle, ArrowUpLeft, Phone, Mail } from "lucide-react";
export const metadata: Metadata = { title: "أسئلة شائعة" };
export default function FAQ() {
  return (
    <main>
      <PageHero
        eyebrow="أسئلة شائعة"
        title="إجابات واضحة،"
        highlight="دون تعقيد."
        desc="جمعنا إجابات عن الشركة والخدمات وسبل التواصل. ولو لم تجد إجابة عن سؤالك، يمكن لفريقنا مساعدتك."
        number="06"
      />
      <section className="section">
        <div className="container faq-layout">
          <div className="faq-aside">
            <span className="faq-aside-icon">
              <MessageCircle size={23} />
            </span>
            <span className="eyebrow">هل ترغب في معرفة المزيد؟</span>
            <h2>
              سؤالك مهم
              <br />
              <em>بالنسبة إلينا.</em>
            </h2>
            <p>
              إذا كنت تحتاج إلى تفاصيل تخص مشروعك أو خدمة معينة، فأرسل إلينا
              استفسارك.
            </p>
            <Link href="/contactUs" className="text-link">
              تواصل معنا <ArrowUpLeft size={17} />
            </Link>
            <div className="faq-aside-number">FAQ / 2026</div>
          </div>
          <FaqList />
        </div>
      </section>

      {/* Contact Numbers Section */}
      <section className="section">
        <div className="container">
          <div className="contact-numbers">
            <div className="contact-number-card">
              <div className="contact-number-icon">
                <Phone size={28} />
              </div>
              <h3>رقم الهاتف</h3>
              <div className="contact-number-value">01155660300</div>
              <p>متاح 24/7 للدعم الفني والاستفسارات</p>
            </div>
            <div className="contact-number-card">
              <div className="contact-number-icon">
                <Mail size={28} />
              </div>
              <h3>البريد الإلكتروني</h3>
              <div className="contact-number-value">roya.tech2025</div>
              <p>roya.tech2025@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="هل ما زال لديك سؤال؟"
        desc="نحن هنا لتوضيح الصورة ومساعدتك على اتخاذ الخطوة المناسبة."
      />
    </main>
  );
}
