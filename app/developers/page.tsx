"use client";

import Link from "next/link";
import { PageHero, CTA } from "@/components/Sections";
import { useState, useEffect } from "react";
import {
  Code2,
  Braces,
  Smartphone,
  Database,
  Workflow,
  ShieldCheck,
  ArrowUpLeft,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  X,
} from "lucide-react";
const stack = [
  {
    I: Code2,
    t: "تطوير الويب",
    d: "واجهات ويب سريعة ومتجاوبة مع تجربة استخدام واضحة.",
  },
  {
    I: Smartphone,
    t: "تطبيقات الهواتف الذكية",
    d: "تجارب للهواتف الذكية تراعي سهولة الاستخدام وطبيعة الجمهور.",
  },
  {
    I: Database,
    t: "الأنظمة والبيانات",
    d: "منطق أعمال منظم، ولوحات إدارة وتقارير مفيدة.",
  },
  {
    I: Workflow,
    t: "واجهات API والتكامل",
    d: "ربط الخدمات والأنظمة لتبادل البيانات بطريقة منظمة.",
  },
  {
    I: ShieldCheck,
    t: "الجودة والأمان",
    d: "الاهتمام بالتحقق من المدخلات، الصلاحيات، وسلامة التدفقات.",
  },
  {
    I: Braces,
    t: "حلول قابلة للتطور",
    d: "بنية واضحة تساعد على الصيانة والتوسع مع نمو المشروع.",
  },
];

const developers = [
  {
    name: "Eng / Fatma Ameen",
    role: "Back End Developer",
    image: "/images/developers_imgs/Fatma_Ameen.jpeg",
    social: {
      whatsapp: "https://wa.me/201029054820",
      github: "https://github.com/fatmaameen",
      facebook: "https://www.facebook.com/share/1B5tYGA4gR/?mibextid=qi2Omg",
      linkedin: "https://www.linkedin.com/in/fatmaameen10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:fatmaameen10@gmail.com",
    },
  },
  {
    name: "Eng / Mohamed Wael",
    role: "Android Developer",
    image: "/images/developers_imgs/Mohamed_Wael.jfif",
    social: {
      whatsapp: "https://wa.me/201117165127",
      github: "https://github.com/mohamedweal901",
      facebook: "https://www.facebook.com/profile.php?id=100038961831651",
      linkedin: "https://www.linkedin.com/in/mohamed-wael-935026216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:mohamedweal901@gmail.com",
    },
  },
  {
    name: "Eng / Fahd Abuolila",
    role: "Full stack Developer",
    image: "/images/developers_imgs/Fahd_Abuolila.jpeg",
    social: {
      whatsapp: "https://wa.me/201140080930",
      github: "https://github.com/Fahd-Abuoolila",
      facebook: "https://www.facebook.com/share/1Evp5Xne2f/",
      linkedin: "https://www.linkedin.com/in/fahd-abuoolila-ab0a972a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:fahd.elden.abuolila@gmail.com",
    },
  },
  {
    name: "Eng / Ziad Abuolila",
    role: "Front End Developer / Android Developer",
    image: "/images/developers_imgs/Ziad_Abuolila.jpg",
    social: {
      whatsapp: "https://wa.me/201140090860",
      github: "https://github.com/ziadabuolila",
      facebook: "https://www.facebook.com/ziad.abuolila",
      linkedin: "https://www.linkedin.com/in/ziad-abuolila-a26584368",
      email: "mailto:ziad.emad.abuolila@gmail.com",
    },
  },
];
export default function Developers() {
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
        eyebrow="المطورون"
        title="كود له هدف."
        highlight="وتجربة لها معنى."
        desc="نطوّر حلولًا رقمية انطلاقًا من احتياج واضح، وتجمع بين جودة التنفيذ وسهولة الاستخدام وقابلية التطور."
        number="03"
      />
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <span className="eyebrow">مجالاتنا التقنية</span>
              <h2>
                الأدوات تتغير،
                <br />
                <em>والهدف ثابت.</em>
              </h2>
              <p>
                نختار التقنيات المناسبة لكل مشروع وفق متطلباته، بدلًا من فرض
                أداة واحدة على جميع الاحتياجات.
              </p>
            </div>
          </div>
          <div className="developer-grid">
            {stack.map(({ I, t, d }, i) => (
              <article className="developer-card" key={t}>
                <div className="developer-card-top">
                  <span>
                    <I size={22} />
                  </span>
                  <small>0{i + 1}</small>
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
                <span className="developer-arrow">
                  <ArrowUpLeft size={17} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center-intro">
            <span className="eyebrow">فريق التطوير</span>
            <h2>
              العقول وراء
              <br />
              <em>الكود.</em>
            </h2>
            <p>
              فريق من المطورين المتخصصين الذين يجمعون بين الخبرة التقنية والشغف
              بالابتكار.
            </p>
          </div>

          <div className="developers-team-grid">
            {developers.map((dev, i) => (
              <article className="developer-team-card" key={dev.name}>
                <div className="developer-team-image">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    onClick={() => openLightbox(dev.image)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="developer-team-content">
                  <h3>{dev.name}</h3>
                  <p className="developer-team-role">{dev.role}</p>
                  <div className="developer-team-social">
                    <a href={dev.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <MessageCircle size={18} />
                    </a>
                    <a href={dev.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                    <a href={dev.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                    <a href={dev.social.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section developer-manifesto">
        <div className="container manifesto-grid">
          <div>
            <span className="eyebrow light">مبدأنا في التطوير</span>
            <h2>
              لا نكتب الشيفرة فحسب،
              <br />
              <em>بل نبني حلولًا.</em>
            </h2>
            <p>
              ينبغي لكل قرار تقني أن يخدم تجربة المستخدم، أو يعزز الاعتمادية، أو
              يسهّل التطوير والصيانة.
            </p>
          </div>
          <div className="code-window">
            <div className="code-window-top">
              <span />
              <span />
              <span />
              <small>roaya / approach.ts</small>
            </div>
            <pre>
              <code>
                <span className="code-purple">const</span> solution = {"{"}
                {"\n"} <span className="code-blue">purpose</span>:{" "}
                <span className="code-green">'أثر حقيقي'</span>,{"\n"}{" "}
                <span className="code-blue">experience</span>:{" "}
                <span className="code-green">'تجربة سهلة'</span>,{"\n"}{" "}
                <span className="code-blue">quality</span>:{" "}
                <span className="code-green">'جودة مدروسة'</span>,{"\n"}{" "}
                <span className="code-blue">growth</span>:{" "}
                <span className="code-purple">true</span>
                {"\n"}
                {"}"};{"\n\n"}
                <span className="code-muted">// نبني بهدف واضح.</span>
              </code>
            </pre>
            <div className="code-window-foot">
              <ShieldCheck size={14} /> شيفرة واضحة. وتجارب مدروسة.
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container developer-contact">
          <div>
            <span className="eyebrow">هل لديك متطلبات تقنية؟</span>
            <h2>
              لنرسم
              <br />
              <em>الصورة معًا.</em>
            </h2>
          </div>
          <div>
            <p>
              شاركنا وصف النظام أو المنصة التي تحتاج إليها، والتكاملات المطلوبة،
              وأهم أولوياتك.
            </p>
            <Link className="button button-dark" href="/contactUs">
              ناقش مشروعك <ArrowUpLeft size={16} />
            </Link>
          </div>
        </div>
      </section>
      <CTA
        title="هل لديك فكرة تقنية؟"
        desc="يسعدنا الاطلاع عليها ومساعدتك في تحديد الخطوة العملية التالية."
      />
    </main>
  );
}
