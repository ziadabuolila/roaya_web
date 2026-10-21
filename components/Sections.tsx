import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowLeft,
  ShieldCheck,
  Code2,
  Smartphone,
  Network,
  CreditCard,
  Blocks,
  Gauge,
  Sparkles,
  Check,
  CircleDollarSign,
  ReceiptText,
  Workflow,
  LockKeyhole,
} from "lucide-react";
export function SectionIntro({
  eyebrow,
  title,
  desc,
  link,
  linkText,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <div className="section-intro">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      {link && (
        <Link className="text-link" href={link}>
          {linkText || "اكتشف المزيد"} <ArrowUpLeft size={17} />
        </Link>
      )}
    </div>
  );
}
const services = [
  {
    n: "01",
    icon: CreditCard,
    title: "حلول الدفع الإلكتروني",
    desc: "تجربة دفع مرنة تساعدك على استقبال المدفوعات وإدارة التحصيل بكفاءة.",
    tags: ["بوابات دفع", "نقاط بيع", "تحصيل"],
  },
  {
    n: "02",
    icon: Code2,
    title: "تطوير البرمجيات",
    desc: "مواقع وتطبيقات وأنظمة مصممة حول احتياج عملك، لا العكس.",
    tags: ["مواقع", "تطبيقات", "أنظمة أعمال"],
  },
  {
    n: "03",
    icon: Network,
    title: "الربط والتكامل",
    desc: "نربط الأنظمة والمنصات لتوفير تجربة تقنية أوضح وأكثر سلاسة.",
    tags: ["API", "تكامل الأنظمة", "أتمتة"],
  },
  {
    n: "04",
    icon: Gauge,
    title: "التقارير وإدارة الأعمال",
    desc: "رؤية أوضح للبيانات والعمليات تساعد فريقك على اتخاذ قرارات أفضل.",
    tags: ["تقارير", "متابعة", "كفاءة"],
  },
];
export function ServiceGrid() {
  return (
    <div className="services-grid">
      {services.map((s) => (
        <article className="service-card" key={s.n}>
          <div className="service-top">
            <span className="service-icon">
              <s.icon size={23} />
            </span>
            <span className="service-num">{s.n}</span>
          </div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          <div className="tag-row">
            {s.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <Link
            href="/services"
            className="card-arrow"
            aria-label={`اكتشف ${s.title}`}
          >
            <ArrowLeft size={17} />
          </Link>
        </article>
      ))}
    </div>
  );
}
export function ProcessStrip() {
  const steps = [
    ["01", "نفهم احتياجك", "نبدأ بالاستماع لهدفك والتحديات التي تواجهك."],
    ["02", "نصمم الحل", "نرتب الأولويات ونبني تصورًا واضحًا للتجربة."],
    ["03", "نطوّر ونختبر", "تنفيذ مدروس مع اهتمام بالتفاصيل والجودة."],
    ["04", "ننطلق معًا", "تسليم واضح وتواصل مستمر حسب طبيعة المشروع."],
  ];
  return (
    <div className="process-grid">
      {steps.map(([n, t, d]) => (
        <div className="process-item" key={n}>
          <span>{n}</span>
          <h3>{t}</h3>
          <p>{d}</p>
        </div>
      ))}
    </div>
  );
}
export function WhyUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: "اهتمام بالأمان",
      desc: "التعامل مع البيانات والثقة مسؤولية أساسية.",
    },
    {
      icon: Sparkles,
      title: "تجربة مدروسة",
      desc: "تفاصيل بسيطة وواضحة تجعل الاستخدام أسهل.",
    },
    {
      icon: Blocks,
      title: "حلول مرنة",
      desc: "نختار التقنية على أساس احتياج المشروع.",
    },
    {
      icon: Workflow,
      title: "عمل متكامل",
      desc: "من الفكرة للتنفيذ، بخطوات واضحة.",
    },
    {
      icon: LockKeyhole,
      title: "مع رؤية باي أنت في أمان",
      desc: "نهتم بتقديم تجربة دفع موثوقة مع الاهتمام بأمان معاملاتك.",
    },
  ];

  return (
    <div className="why-grid">
      {points.map(({ icon: Icon, title, desc }) => (
        <div className="why-item" key={title}>
          <span>
            <Icon size={21} />
          </span>

          <div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>

          <Check size={16} className="why-check" />
        </div>
      ))}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  highlight,
  desc,
  number,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  desc: string;
  number: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div>
          <div className="breadcrumb">
            <Link href="/">الرئيسية</Link>
            <span>/</span>
            <span>{eyebrow}</span>
          </div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>
            {title} {highlight && <em>{highlight}</em>}
          </h1>
          <p>{desc}</p>
        </div>
        <div className="page-hero-art">
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="art-center">
            <span className="brand-symbol">
                <img
                  src="/images/logo_roaya.png"
                  alt="رؤية باي"
                  className="brand-logo"
                />
              </span>
            <small>رؤية باى</small>
          </div>
          <span className="art-label label-one">
            <ShieldCheck size={16} /> أمان وثقة
          </span>
          <span className="art-label label-two">
            <Sparkles size={16} /> أفكار أذكى
          </span>
          <b className="art-number">{number}</b>
        </div>
      </div>
    </section>
  );
}
export function CTA({
  title = "لنبنِ ما يستحق",
  desc = "شاركنا فكرتك لنساعدك على اكتشاف الخطوة المناسبة.",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="container cta-wrap">
      <div className="cta-card">
        <div className="cta-glow" />
        <span className="eyebrow light">هل أنت مستعد للبدء؟</span>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link href="/contactUs" className="button button-light">
          تواصل معنا <ArrowUpLeft size={16} />
        </Link>
        <span className="cta-star">✳</span>
      </div>
    </section>
  );
}
