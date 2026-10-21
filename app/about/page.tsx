import type { Metadata } from "next";
import {
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
  Target,
  Eye,
  Compass,
} from "lucide-react";
import { PageHero, CTA, ProcessStrip } from "@/components/Sections";
export const metadata: Metadata = { title: "عن الشركة" };
const values = [
  {
    I: ShieldCheck,
    t: "الأمان والثقة",
    d: "نضع حماية البيانات ووضوح التعاملات في قلب التجربة.",
  },
  { I: Lightbulb, t: "الابتكار", d: "نبحث عن طرق أفضل لحل المشكلات الحقيقية." },
  {
    I: HeartHandshake,
    t: "الاحترافية",
    d: "نهتم بجودة التنفيذ والتواصل في كل خطوة.",
  },
  {
    I: Target,
    t: "المرونة",
    d: "نؤمن أن الحل الجيد يتشكل حسب احتياج كل نشاط.",
  },
];
export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="عن الشركة"
        title="نؤمن بأن كل"
        highlight="تفصيل يصنع فرقًا."
        desc="رؤية باي لحلول السداد والبرمجيات؛ شريك تقني يساعدك على تبسيط الدفع، وتطوير الأعمال، وصناعة تجارب رقمية أفضل."
        number="01"
      />
      <section className="section">
        <div className="container about-story">
          <div>
            <span className="eyebrow">حكايتنا</span>
            <h2>
              تقنية أقرب إلى الناس.
              <br />
              <em>وحلول أقرب للواقع.</em>
            </h2>
          </div>
          <div>
            <p>
              في رؤية باي، نعمل عند نقطة التقاء التكنولوجيا باحتياجات الحياة
              اليومية. نقدم حلول دفع إلكتروني وخدمات برمجية تساعد الأفراد
              والشركات على إنجاز معاملاتهم بسهولة وكفاءة أكبر.
            </p>
            <p>
              من بوابات الدفع ونقاط البيع إلى المواقع والتطبيقات وأنظمة الأعمال،
              هدفنا أن تكون التقنية وسيلة واضحة لتحقيق نتيجة حقيقية، لا أن تكون
              مصدرًا لتعقيد إضافي.
            </p>
          </div>
        </div>
      </section>
      <section className="section vision-section">
        <div className="container vision-grid">
          <article className="vision-card vision-main">
            <span className="vision-icon">
              <Eye />
            </span>
            <span className="eyebrow light">رؤيتنا</span>
            <h2>
              أن أن نكون جزءًا من
              <br />
              مستقبل رقمي أسهل.
            </h2>
            <p>
              أن نساهم في تطوير حلول السداد والبرمجيات، بما يعزز كفاءة التعاملات
              ويقرب الخدمات الرقمية من الجميع.
            </p>
          </article>
          <article className="vision-card vision-secondary">
            <span className="vision-icon">
              <Compass />
            </span>
            <span className="eyebrow">رسالتنا</span>
            <h2>
              نحوّل الاحتياجاتات
              <br />
              إلى حلول قابلة للتطبيق.
            </h2>
            <p>
              تمكين الأفراد والأعمال من الاستفادة من التكنولوجيا عبر حلول عملية،
              مرنة، وسهلة الاستخدام.
            </p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="center-intro">
            <span className="eyebrow">المبادئ التي توجهنا</span>
            <h2>
              قيم نسترشد بها
              <br />
              <em>كل تجربة.</em>
            </h2>
            <p>
              الثقة ليست وعدًا فحسب؛ بل مجموعة من التفاصيل نلتزم بها كل يوم.
            </p>
          </div>
          <div className="values-grid">
            {values.map(({ I, t, d }, i) => (
              <article className="value-card" key={t}>
                <span className="value-icon">
                  <I size={22} />
                </span>
                <small>0{i + 1}</small>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container">
          <div className="center-intro">
            <span className="eyebrow">منهجية عملنا</span>
            <h2>
              من السؤال الأول،
              <br />
              <em>حتى الوصول إلى الحل المناسب.</em>
            </h2>
          </div>
          <ProcessStrip />
        </div>
      </section>
      <CTA
        title="لنفهم احتياجاتك معًا."
        desc="يبدأ كل مشروع بحوار مثمر؛ شاركنا أهدافك والتحديات التي تواجهها."
      />
    </main>
  );
}
