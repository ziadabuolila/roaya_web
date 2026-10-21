import Link from "next/link";
import {
  ArrowUpLeft,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Zap,
  CreditCard,
  Code2,
  Network,
  Smartphone,
  CircleCheck,
  MoveUpLeft,
} from "lucide-react";
import {
  SectionIntro,
  ServiceGrid,
  ProcessStrip,
  WhyUs,
  CTA,
} from "@/components/Sections";
import Loader from "@/components/Loader";
const capabilities = [
  ["حلول دفع أذكى", "مدفوعات رقمية وتجارب تحصيل سهلة", "01"],
  ["برمجيات مصممة لاحتياجاتك", "مواقع وتطبيقات وأنظمة أعمال", "02"],
  ["تكامل يسهّل أعمالك", "ربط الأنظمة وتدفق البيانات", "03"],
];
export default function Home() {
  return (
    <main>
      <Loader />
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="live-dot" /> حلول السداد والبرمجيات{" "}
              <span className="kicker-line" />
            </div>
            <h1 className="home-hero-title">
              <span className="home-hero-line">
                <span className="hero-word word-1">المستقبل</span>{" "}
                <span className="hero-word word-2">الرقمي</span>
              </span>
              <br />
              <span className="home-hero-line">
                <span className="hero-word word-3">يبدأ</span>{" "}
                <span className="hero-word word-4">من</span>{" "}
              <span className="hero-highlight">
                  <span className="hero-word word-5">رؤية</span>{" "}
                  <span className="hero-word word-6">مختلفة</span>
                <svg
                  viewBox="0 0 310 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M3 13 C70 1, 190 3, 306 10" />
                </svg>
              </span>
              </span>
            </h1>
            <p className="hero-desc">
              من حلول الدفع إلى البرمجيات الذكية، نساعدك على تحويل أفكارك إلى
              خطوات عملية — بتجربة أبسط، وتفاصيل محسوبة، ورؤية للمستقبل.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contactUs">
                ابدأ مشروعك <ArrowUpLeft size={17} />
              </Link>
              <Link className="button button-outline" href="/services">
                اكتشف خدماتنا <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="dashboard-card">
              <div className="dash-top">
                <span className="dash-brand">
                  <span className="mini-logo">
                    <Zap size={13} fill="currentColor" />
                  </span>{" "}
                  Roaya Pay
                </span>
                <span className="dash-menu">•••</span>
              </div>
              <div className="dash-welcome">
                <small>مرحبًا بك في</small>
                <h3>عالم أسهل للدفع</h3>
              </div>
              <div className="balance-card">
                <div className="balance-top">
                  <span>نظرة على عملياتك</span>
                  <span className="balance-chip">
                    <ShieldCheck size={12} /> آمن
                  </span>
                </div>
                <div className="balance-value">
                  تجربة <span>أذكى</span>
                </div>
                <div className="balance-line">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="quick-actions">
                <div>
                  <span className="quick-icon green">
                    <CreditCard size={17} />
                  </span>
                  <small>مدفوعات</small>
                </div>
                <div>
                  <span className="quick-icon lilac">
                    <Network size={17} />
                  </span>
                  <small>تكامل</small>
                </div>
                <div>
                  <span className="quick-icon peach">
                    <Code2 size={17} />
                  </span>
                  <small>برمجيات</small>
                </div>
              </div>
              <div className="dash-bottom">
                <span className="dash-status" /> مستعد لخطوتك التالية{" "}
                <ArrowLeft size={14} />
              </div>
            </div>
            <div className="float-card float-payment">
              <span className="float-icon">
                <CreditCard size={17} />
              </span>
              <span>
                <b>دفع أسهل</b>
                <small>رحلة سلسة من البداية</small>
              </span>
              <CircleCheck size={16} className="float-ok" />
            </div>
            <div className="float-card float-code">
              <span className="float-icon code">
                <Code2 size={17} />
              </span>
              <span>
                <b>حلول مخصصة</b>
                <small>مصممة لاحتياجك</small>
              </span>
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>نقرّب التكنولوجيا من حياتك اليومية</span>
          <div className="hero-bottom-line" />
          <span className="scroll-note">
            اكتشف رؤية باي
          </span>
        </div>
      </section>
      <section className="capability-strip">
        <div className="container capability-inner">
          {capabilities.map(([t, d, n]) => (
            <div className="capability" key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
              <ArrowUpLeft size={17} />
            </div>
          ))}
        </div>
      </section>
      <section className="section section-services" id="services">
        <div className="container">
          <SectionIntro
            eyebrow="ما الذي نقدمه؟"
            title="حلول تعمل معك، وتبسّط يومك."
            desc="منذ الفكرة الأولى وحتى يصبح الحل جزءًا من أعمالك اليومية، نجمع بين التقنية والفهم الدقيق لاحتياجاتك."
            link="/services"
            linkText="كل خدماتنا"
          />
          <ServiceGrid />
        </div>
      </section>
      <section className="section about-teaser">
        <div className="container about-teaser-grid">
          <div className="about-art">
            <div className="about-art-bg" />
            <div className="about-quote-mark">“</div>
            <div className="about-quote">
              <p>
                التكنولوجيا ليست مجرد أدوات، بل وسيلة لجعل التفاصيل اليومية أكثر
                سهولة.
              </p>
              <span>فلسفتنا في رؤية باي</span>
            </div>
            <div className="about-stamp">
              <span>Roaya Pay</span>
              <b>رؤيــة بــاى</b>
            </div>
            <span className="about-orbit-dot" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">عن رؤية باي</span>
            <h2>
              رؤيتنا لا تقتصر
              <br />
              على ما نقدمه،
              <br />
              <em>بل تمتد إلى ما نيسّره.</em>
            </h2>
            <p>
              نؤمن بأن أفضل الحلول التقنية هي التي تفهم احتياجات الأفراد
              والأعمال، وتحول الخطوات المعقدة إلى تجارب واضحة. لذلك نطوّر حلول
              دفع وبرمجيات تواكب احتياجات السوق وتنمو مع أعمالك.
            </p>
            <div className="about-points">
              <span>
                <ShieldCheck size={18} /> اهتمام بالأمان والثقة
              </span>
              <span>
                <Sparkles size={18} /> ابتكار له هدف
              </span>
              <span>
                <Zap size={18} /> مرونة وسهولة
              </span>
            </div>
            <Link className="text-link" href="/about">
              تعرّف إلى قصتنا <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section ecosystem-section">
        <div className="container ecosystem-panel">
          <div className="ecosystem-copy">
            <span className="eyebrow">منظومة متكاملة</span>
            <h2>
              من الدفع اليومي،
              <br />
              <em>للتجربة الرقمية كاملة.</em>
            </h2>
            <p>
              تجمع رؤية باي بين خدمات السداد وتطوير البرمجيات والربط التقني،
              لتساعد على بناء رحلة رقمية أوضح للأفراد والأعمال.
            </p>
            <Link className="text-link" href="/services">
              استكشف المنظومة <ArrowUpLeft size={17} />
            </Link>
          </div>
          <div
            className="ecosystem-map"
            aria-label="رسم توضيحي لترابط خدمات رؤية باي"
          >
            <div className="ecosystem-ring ring-outer" />
            <div className="ecosystem-ring ring-inner" />
            <div className="ecosystem-core">
              <span className="brand-symbol">
                <img
                  src="/images/logo_roaya.png"
                  alt="رؤية باي"
                  className="brand-logo"
                />
              </span>
              <b>رؤية باي</b>
            </div>
            <div className="ecosystem-node ecosystem-node-a">
              <CreditCard />
              <span>الدفع</span>
            </div>
            <div className="ecosystem-node ecosystem-node-b">
              <Code2 />
              <span>البرمجيات</span>
            </div>
            <div className="ecosystem-node ecosystem-node-c">
              <Network />
              <span>التكامل</span>
            </div>
            <div className="ecosystem-node ecosystem-node-d">
              <ShieldCheck />
              <span>الامان</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container">
          <SectionIntro
            eyebrow="من الفكرة للتنفيذ"
            title="خطوات واضحة. ونتيجة ذات قيمة."
            desc="لكل مشروع تفاصيله، ونبدأ دائمًا بفهم دقيق ونتقدم وفق خطوات مدروسة."
          />
          <ProcessStrip />
        </div>
      </section>
      <section className="section why-section">
        <div className="container why-layout">
          <div>
            <span className="eyebrow">لماذا رؤية باي؟</span>
            <h2>
              التفاصيل الصغيرة
              <br />
              هي التي تصنع <em>الفرق الكبير.</em>
            </h2>
            <Link href="/about" className="text-link">
              اكتشف قيمنا <ArrowUpLeft size={17} />
            </Link>
          </div>
          <WhyUs />
        </div>
      </section>
      <section className="section audience-section">
        <div className="container">
          <SectionIntro
            eyebrow="حلول لاحتياجات متنوعة"
            title="كل نشاط له طريقته."
            desc="نبدأ بفهم طبيعة أعمالك لنختار معك المسار الأنسب."
          />
          <div className="audience-grid">
            <article>
              <span className="audience-icon">
                <CreditCard />
              </span>
              <small>01 / COMMERCE</small>
              <h3>التجارة والأعمال</h3>
              <p>حلول تساعد على تنظيم الدفع والتحصيل وتسهيل رحلة العميل.</p>
            </article>
            <article>
              <span className="audience-icon">
                <Smartphone />
              </span>
              <small>02 / DIGITAL</small>
              <h3>المشروعات الرقمية</h3>
              <p>مواقع وتطبيقات وتجارب رقمية تبدأ من احتياج المستخدم.</p>
            </article>
            <article>
              <span className="audience-icon">
                <Network />
              </span>
              <small>03 / ENTERPRISE</small>
              <h3>الشركات والمؤسسات</h3>
              <p>أنظمة وتكاملات تقنية تدعم سير العمل وتزيد وضوح العمليات.</p>
            </article>
          </div>
        </div>
      </section>
      <CTA
        title="فكرتك تستحق بداية قوية."
        desc="شاركنا احتياجاتك، ولنكتشف معًا كيفية تحويل فكرتك إلى حل عملي."
      />
    </main>
  );
}
