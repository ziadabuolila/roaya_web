import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/Sections";

export const metadata: Metadata = { title: "تطوير البرمجيات" };

const softwareServices = [
  {
    title: "تطوير المواقع والبرمجيات",
    desc: "نحوّل أفكارك إلى مواقع ومنتجات رقمية عملية، بتصميم واضح وتجربة مناسبة لمستخدميك.",
    image: "programming.png",
  },
  {
    title: "الأنظمة المتكاملة",
    desc: "نبني أنظمة مترابطة تساعد على تنظيم سير العمل وتبادل البيانات بين أجزاء مشروعك.",
    image: "system.png",
  },
  {
    title: "تطبيقات الهواتف الذكية",
    desc: "تطبيقات جوال تضع احتياجات المستخدم في المقدمة وتعمل بانسيابية على مختلف الأجهزة.",
    image: "phone.png",
  },
];

export default function SoftwarePage() {
  return (
    <main>
      <PageHero
        eyebrow="تطوير البرمجيات"
        title="برمجيات تنطلق"
        highlight="من فكرتك."
        desc="نبني مواقع وتطبيقات وأنظمة رقمية تستجيب لاحتياجات المستخدمين وطبيعة العمل."
        number="02"
      />
      <section className="section software-showcase-section">
        <div className="container">
          <div className="software-showcase-heading">
            <span>من الفكرة إلى التنفيذ</span>
            <h2>نبني تجارب رقمية<br />تخدم أهدافك</h2>
            <p>كل مشروع يبدأ بفهم احتياجك، ثم نختار التقنية المناسبة ونبني الحل خطوة بخطوة.</p>
          </div>
          <div className="software-showcase-list">
            {softwareServices.map((service, index) => (
              <article className="software-showcase-row" key={service.image}>
                <div className="software-showcase-visual">
                  <div className="software-showcase-image">
                    <Image
                      src={`/images/s_img/section_1/${service.image}`}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 100vw, 50vw"
                    />
                  </div>
                  <span className="software-showcase-index">0{index + 1}</span>
                  <span className="software-showcase-orbit" aria-hidden="true" />
                </div>
                <div className="software-showcase-copy">
                  <span className="software-showcase-kicker">حلول برمجية مخصصة</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="software-showcase-foot">
                    <span>تصميم مدروس</span>
                    <span>تنفيذ مرن</span>
                    <span>تجربة متكاملة</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="هل لديك فكرة مشروع برمجي؟"
        desc="شاركنا رؤيتك وسنساعدك في تحويلها إلى واقع."
      />
    </main>
  );
}
