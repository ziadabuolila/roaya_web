"use client";

import Link from "next/link";
import { PageHero, CTA } from "@/components/Sections";
import { useState, useEffect } from "react";
import {
  Smartphone,
  Monitor,
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
  Star,
  ArrowUpLeft,
  Clock,
  Database,
  BarChart3,
  Lock,
  HeadphonesIcon,
  Code2,
  CreditCard,
  X,
} from "lucide-react";

const applications = [
  {
    I: Smartphone,
    t: "تطبيق التاجر - موبايل",
    d: "تطبيق متكامل للتاجر لإدارة المبيعات والطلبات من أي مكان وفي أي وقت.",
    features: [
      "إدارة الطلبات والمبيعات",
      "تتبع الشحنات",
      "إصدار الفواتير",
      "تقارير فورية",
    ],
    image: "/images/app/mobile_app.png",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.roayamerchantmobile.merchant",
  },
  {
    I: Monitor,
    t: "تطبيق التاجر - مكنة صان مي",
    d: "نظام POS متكامل للأسواق والمتاجر الكبيرة لسرعة وإدارة البيع.",
    features: [
      "سرعة في المعالجة",
      "إدارة المخزون",
      "ربط مباشر بالبنوك",
      "تقارير يومية",
    ],
    image: "/images/app/sunmi_app.png",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.roayamerchantmobile.merchant",
  },
];

const companyFeatures = [
  {
    I: ShieldCheck,
    t: "أمان وتشفير متقدم",
    d: "نستخدم أحدث تقنيات التشفير لحماية بياناتك ومعاملاتك.",
  },
  {
    I: Zap,
    t: "سرعة وكفاءة عالية",
    d: "أنظمةنا مصممة لتعمل بأقصى سرعة مع أداء متميز.",
  },
  {
    I: HeadphonesIcon,
    t: "دعم فني 24/7",
    d: "فريق دعم متاح على مدار الساعة لمساعدتك في أي وقت.",
  },
  {
    I: Database,
    t: "تخزين سحابي آمن",
    d: "بياناتك محفوظة في سحابة آمنة مع نسخ احتياطي مستمر.",
  },
];

const whyRoaya = [
  {
    I: Star,
    t: "خبرة طويلة",
    d: "سنوات من الخبرة في تطوير حلول الدفع والبرمجيات.",
  },
  {
    I: TrendingUp,
    t: "نمو مستمر",
    d: "نطور حلولنا باستمرار لتواكب أحدث التقنيات.",
  },
  {
    I: CheckCircle2,
    t: "موثوقية عالية",
    d: "نعمل مع أكثر من 500 شركة ونخدم آلاف العملاء.",
  },
  {
    I: Code2,
    t: "تقنية متقدمة",
    d: "نستخدم أحدث التقنيات وأفضل الممارسات البرمجية.",
  },
];

const programBenefits = [
  {
    I: CreditCard,
    t: "تكامل مع بوابات الدفع",
    d: "ربط مباشر مع جميع بوابات الدفع الرئيسية.",
  },
  {
    I: BarChart3,
    t: "تقارير وتحليلات",
    d: "لوحات تحكم ذكية مع تقارير تفصيلية.",
  },
  {
    I: Lock,
    t: "صلاحيات متعددة",
    d: "نظام صلاحيات مرن وآمن لكل دور.",
  },
  {
    I: Clock,
    t: "عمل في الوقت الفعلي",
    d: "تحديثات فورية لجميع العمليات والبيانات.",
  },
];

export default function Programs() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxImage) {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  return (
    <main>
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="إغلاق"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="صورة مكبرة"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <PageHero
        eyebrow="برامجنا"
        title="حلول تقنية"
        highlight="لأعمالك."
        desc="مجموعة من التطبيقات والأنظمة المتكاملة التي تساعدك على إدارة أعمالك بكفاءة عالية."
        number="06"
      />

      <section className="section">
        <div className="container">
          <div className="center-intro">
            <span className="eyebrow">تطبيقاتنا المتكاملة</span>
            <h2>
              كل ما تحتاجه
              <br />
              <em>في مكان واحد.</em>
            </h2>
            <p>
              نقدم مجموعة من التطبيقات المتكاملة التي تغطي جميع جوانب عملك،
              من إدارة المبيعات إلى تتبع الشحنات.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.roayamerchantmobile.merchant"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary download-btn-anim"
              style={{ marginTop: "20px" }}
            >
              تنزيل التطبيق
            </a>
          </div>

          <div className="applications-grid">
            {applications.map((app, i) => (
              <article className="application-card" key={app.t}>
                <div className="application-visual">
                  <div className="app-image-container">
                    <img
                      src={app.image}
                      alt={app.t}
                      className="app-image"
                      onClick={() => openLightbox(app.image)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div className="application-content">
                  <span className="app-number">0{i + 1}</span>
                  <h3>{app.t}</h3>
                  <p>{app.d}</p>
                  <div className="app-features">
                    {app.features.map((f, fi) => (
                      <span key={fi}>
                        <CheckCircle2 size={14} />
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link href="/contactUs" className="program-link">
                    اطلب العرض <ArrowUpLeft size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section programs-dark">
        <div className="container">
          <div className="center-intro">
            <span className="eyebrow light">مميزات رؤية باي</span>
            <h2>
              لماذا
              <br />
              <em>تختارنا؟</em>
            </h2>
            <p style={{ color: "#c5d9c8" }}>
              نحن لا نقدم مجرد برامج، بل نقدم شريك حقيقي لنجاح أعمالك.
            </p>
          </div>

          <div className="features-grid">
            {companyFeatures.map((feature, i) => (
              <article className="feature-card" key={feature.t}>
                <span className="feature-icon">
                  <feature.I size={28} />
                </span>
                <h3>{feature.t}</h3>
                <p>{feature.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center-intro">
            <span className="eyebrow">مميزات برامجنا</span>
            <h2>
              كل برنامج
              <br />
              <em>مصمم للتميز.</em>
            </h2>
            <p>
              برامجنا تتميز بمجموعة من الميزات التي تجعلها الخيار الأفضل
              لأعمالك.
            </p>
          </div>

          <div className="benefits-grid-alt">
            {programBenefits.map((benefit, i) => (
              <article className="benefit-card-alt" key={benefit.t}>
                <span className="benefit-icon-alt">
                  <benefit.I size={32} />
                </span>
                <div>
                  <h3>{benefit.t}</h3>
                  <p>{benefit.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section programs-dark">
        <div className="container">
          <div className="center-intro">
            <span className="eyebrow light">لماذا رؤية باي؟</span>
            <h2>
              شريكك في
              <br />
              <em>النجاح الرقمي.</em>
            </h2>
            <p style={{ color: "#c5d9c8" }}>
              نجمع بين الخبرة التقنية والفهم العميق لاحتياجات السوق المصري.
            </p>
          </div>

          <div className="why-grid">
            {whyRoaya.map((item, i) => (
              <article className="why-card" key={item.t}>
                <span className="why-number">{i + 1}</span>
                <span className="why-icon">
                  <item.I size={36} />
                </span>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container programs-cta">
          <div className="programs-cta-content">
            <span className="eyebrow">جاهز للبدء؟</span>
            <h2>
              دعنا نحول
              <br />
              <em>أفكارك إلى واقع.</em>
            </h2>
            <p>
              تواصل معنا اليوم لمناقشة احتياجاتك واحصل على عرض مخصص لأعمالك.
            </p>
            <Link href="/contactUs" className="button button-dark">
              احصل على استشارة مجانية <ArrowUpLeft size={16} />
            </Link>
          </div>
          <div className="programs-cta-visual">
            <div className="cta-circle circle-1" />
            <div className="cta-circle circle-2" />
            <div className="cta-center">
              <Star size={40} />
              <span>START</span>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="ابدأ رحلتك الرقمية معنا."
        desc="تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك."
      />
    </main>
  );
}
