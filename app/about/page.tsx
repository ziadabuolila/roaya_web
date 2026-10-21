import type { Metadata } from "next";
import {
  ShieldCheck,
  Lightbulb,
  BadgeCheck,
  Eye,
  Compass,
  CreditCard,
  Code2,
  BarChart3,
  PlugZap,
  Headset,
  LockKeyhole,
  Settings2,
  Rocket,
  Handshake,
  UsersRound,
  Sparkles,
  Check,
} from "lucide-react";
import { PageHero, CTA } from "@/components/Sections";

export const metadata: Metadata = { title: "عن الشركة" };

const values = [
  { Icon: Eye, title: "الشفافية", text: "نلتزم بالوضوح والصدق في تعاملاتنا وشراكاتنا." },
  { Icon: Lightbulb, title: "الابتكار", text: "نطوّر أفكارًا وحلولًا تواكب تغيرات السوق." },
  { Icon: BadgeCheck, title: "الاحترافية", text: "نحرص على جودة العمل في كل تفصيلة." },
  { Icon: ShieldCheck, title: "الأمان", text: "نضع حماية البيانات وخصوصية العملاء في المقدمة." },
];

const offerings = [
  { Icon: CreditCard, title: "أنظمة الدفع الإلكتروني", text: "بوابات دفع، نقاط بيع، فواتير رقمية، ومحافظ إلكترونية." },
  { Icon: Code2, title: "تطوير البرمجيات", text: "مواقع وتطبيقات موبايل وأنظمة لإدارة الشركات والمتاجر." },
  { Icon: BarChart3, title: "الأنظمة المحاسبية", text: "تقارير مالية ذكية تساعد على متابعة الأداء." },
  { Icon: PlugZap, title: "الربط والتكامل", text: "خدمات API للربط مع المنصات والمتاجر المختلفة." },
  { Icon: Headset, title: "الدعم الفني", text: "فريق دعم متاح على مدار الساعة لمساندة العملاء." },
];

const reasons = [
  "تقنيات حديثة ومتطورة",
  "حلول مرنة تناسب مختلف أنواع الأعمال",
  "اهتمام بأمان البيانات والخصوصية",
  "سرعة في التنفيذ والتحصيل",
  "دعم فني متواصل",
];

export default function About() {
  return (
    <main className="about-page">
      <PageHero
        eyebrow="عن الشركة"
        title="نبسّط عالم الدفع،"
        highlight="ونطوّر ما بعده."
        desc="رؤية باي لحلول السداد والبرمجيات؛ شركة تقنية تقدم حلولًا رقمية تساعد الأفراد والشركات على إنجاز أعمالهم بثقة وسهولة."
        number="01"
      />

      <section className="section about-intro-section">
        <div className="container about-intro-layout">
          <div className="about-intro-title">
            <span className="about-section-kicker">حكايتنا</span>
            <h2>التقنية في خدمة<br /><em>احتياجات حقيقية.</em></h2>
            <span className="about-intro-mark" aria-hidden="true">رؤية باي</span>
          </div>
          <div className="about-intro-copy">
            <p className="about-intro-lead">
              شركة رؤية باي لحلول السداد والبرمجيات متخصصة في تقديم حلول دفع رقمية مبتكرة تلبي احتياجات الأفراد والشركات في عالم رقمي متسارع.
            </p>
            <p>
              منذ انطلاقتنا، نسعى إلى تسهيل عمليات الدفع والتحصيل الإلكتروني من خلال منصات آمنة وسريعة وسهلة الاستخدام. نعمل عند نقطة التقاء التقنية باحتياجات الأعمال، ونصمم حلولًا تجعل التعاملات اليومية أكثر سلاسة.
            </p>
            <div className="about-experience-note">
              <Sparkles size={20} />
              <span>خبرة تقنية، وفهم أعمق لاحتياجات السوق.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-direction-section">
        <div className="container about-direction-grid">
          <article className="about-direction-card about-vision-card">
            <div className="about-direction-top"><span>01</span><Eye size={23} /></div>
            <span className="about-section-kicker">رؤيتنا</span>
            <h2>ريادة تصنع أثرًا<br />في مستقبل رقمي.</h2>
            <p>أن نكون الرواد في مجال حلول السداد والبرمجة في المنطقة، عبر خدمات رقمية متطورة تعزز كفاءة التعاملات المالية وسرعتها.</p>
          </article>
          <article className="about-direction-card about-mission-card">
            <div className="about-direction-top"><span>02</span><Compass size={23} /></div>
            <span className="about-section-kicker">رسالتنا</span>
            <h2>تقنية ذكية،<br />ومعاملات أسهل.</h2>
            <p>تمكين الأفراد والشركات من إجراء عمليات الدفع الإلكتروني بسهولة وأمان، من خلال تطوير حلول تكنولوجية ذكية ومبتكرة.</p>
          </article>
        </div>
      </section>

      <section className="section about-offerings-section">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-section-kicker">ماذا نقدم</span>
            <h2>حلول متكاملة،<br /><em>من الدفع إلى التطوير.</em></h2>
            <p>مجموعة من الخدمات الرقمية التي تدعم أعمالك في كل مرحلة.</p>
          </div>
          <div className="about-offerings-list">
            {offerings.map(({ Icon, title, text }, index) => (
              <article className="about-offering" key={title}>
                <span className="about-offering-index">0{index + 1}</span>
                <span className="about-offering-icon"><Icon size={23} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="about-offering-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-values-section">
        <div className="container">
          <div className="about-section-heading about-values-heading">
            <span className="about-section-kicker">قيمنا</span>
            <h2>مبادئ ثابتة،<br /><em>في كل خطوة.</em></h2>
          </div>
          <div className="about-values-grid">
            {values.map(({ Icon, title, text }, index) => (
              <article className="about-value-card" key={title}>
                <span className="about-value-number">0{index + 1}</span>
                <span className="about-value-icon"><Icon size={24} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-why-section">
        <div className="container about-why-layout">
          <div className="about-why-copy">
            <span className="about-section-kicker">لماذا رؤية باي؟</span>
            <h2>شريك يفهم<br /><em>طبيعة عملك.</em></h2>
            <p>نجمع بين الخبرة التقنية والفهم العميق لاحتياجات السوق المحلي والإقليمي، ونصمم حلولًا مرنة قابلة للتخصيص حسب طبيعة كل عميل.</p>
            <p>نهتم بأمان البيانات وسرعة التنفيذ، ونسعى إلى بناء علاقة طويلة الأمد مع عملائنا أساسها الثقة والمصداقية.</p>
          </div>
          <div className="about-reasons-panel">
            <div className="about-reasons-heading"><span>لماذا تختارنا</span><Settings2 size={21} /></div>
            {reasons.map((reason) => (
              <div className="about-reason" key={reason}><span><Check size={15} /></span><p>{reason}</p></div>
            ))}
            <div className="about-reasons-decoration" aria-hidden="true"><Rocket size={44} /></div>
          </div>
        </div>
      </section>

      <section className="section about-expertise-section">
        <div className="container about-expertise-layout">
          <div className="about-expertise-badge"><Handshake size={34} /><span>شراكات<br />تدعم النمو</span></div>
          <div>
            <span className="about-section-kicker">خبراتنا وشراكاتنا</span>
            <h2>خبرة تتطور<br /><em>بالتعاون والثقة.</em></h2>
            <p>نمتلك سجلًا حافلًا بالشراكات الناجحة مع شركات ومؤسسات في قطاعات مختلفة، وأسهمنا في تسهيل آلاف العمليات المالية اليومية عبر منصاتنا الرقمية.</p>
          </div>
        </div>
      </section>

      <section className="section about-team-section">
        <div className="container about-team-layout">
          <div className="about-team-icon"><UsersRound size={34} /><span>فريق<br />رؤية باي</span></div>
          <div className="about-team-copy">
            <span className="about-section-kicker">فريق العمل</span>
            <h2>عقول مختلفة،<br /><em>تعمل نحو هدف واحد.</em></h2>
            <p>يتكوّن فريق رؤية باي من مهندسين ومبرمجين ومصممين وخبراء نظم معلومات يعملون بتنسيق لتحقيق أفضل النتائج، باستخدام لغات البرمجة والتقنيات الحديثة.</p>
            <p>لا نعتمد على الحلول الجاهزة وحدها؛ بل نصنع لكل عميل تجربة فريدة تليق برؤيته.</p>
          </div>
        </div>
      </section>

      <section className="section about-commitment-section">
        <div className="container">
          <div className="about-commitment-card">
            <span className="about-commitment-icon"><LockKeyhole size={25} /></span>
            <span className="about-section-kicker">التزامنا</span>
            <h2>ثقة نبنيها،<br />وتطوير لا يتوقف.</h2>
            <p>نلتزم في رؤية باي بمعايير الجودة والابتكار، ونعمل باستمرار على تحسين أدائنا والاستماع إلى ملاحظات عملائنا؛ لنساهم في بناء اقتصاد رقمي متطور يخدم الجميع.</p>
          </div>
        </div>
      </section>

      <CTA
        title="لنبنِ الحل المناسب لعملك."
        desc="شاركنا أهدافك واحتياجاتك، ودعنا نبدأ حوارًا مثمرًا حول خطوتك القادمة."
      />
    </main>
  );
}
