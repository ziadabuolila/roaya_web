import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/Sections";
import { Code2, ArrowUpLeft, Globe, Smartphone, Database } from "lucide-react";

export const metadata: Metadata = { title: "تطوير البرمجيات" };

const softwareServices = [
  [
    "المواقع الإلكترونية",
    "مواقع تعريفية وتجارية بهوية واضحة وتجربة متجاوبة مع جميع الأجهزة.",
  ],
  [
    "تطبيقات الهواتف الذكية",
    "تطبيقات مصممة حول رحلة المستخدم وأهداف المشروع لأفضل تجربة استخدام.",
  ],
  [
    "أنظمة إدارة الأعمال",
    "لوحات تشغيل وإدارة ومتابعة تناسب سير العمل وتحسين الإنتاجية.",
  ],
  [
    "التقارير والبيانات",
    "تنظيم المعلومات وعرض المؤشرات بصورة مفهومة لاتخاذ قرارات أفضل.",
  ],
];

function ServiceRow({ title, desc, index }: { title: string; desc: string; index: number }) {
  return (
    <div className="service-row">
      <span className="service-row-num">0{index + 1}</span>
      <div className="service-row-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <ArrowUpLeft size={18} className="service-row-arrow" />
    </div>
  );
}

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
      <section className="section">
        <div className="container">
          <div className="service-detail-page">
            <div className="service-page-icon software">
              <Code2 size={40} />
            </div>
            <h2>حلول برمجية متكاملة</h2>
            <p>
              نطوّر حلولاً برمجية مخصصة تبدأ من فهم احتياجاتك وتنتهي بتنفيذ يفوق
              توقعاتك، مع التركيز على الجودة والأداء وسهولة الاستخدام.
            </p>
            <div className="service-rows-list">
              {softwareServices.map(([title, desc], index) => (
                <ServiceRow key={title} title={title} desc={desc} index={index} />
              ))}
            </div>
            <div className="service-features">
              <div className="feature-item">
                <Globe size={24} />
                <div>
                  <h3>مواقع متجاوبة</h3>
                  <p>تعمل بشكل مثالي على جميع الأجهزة والمتصفحات</p>
                </div>
              </div>
              <div className="feature-item">
                <Smartphone size={24} />
                <div>
                  <h3>تطبيقات متميزة</h3>
                  <p>تجربة مستخدم سلسة ومبتكرة للهواتف الذكية</p>
                </div>
              </div>
              <div className="feature-item">
                <Database size={24} />
                <div>
                  <h3>أنظمة قوية</h3>
                  <p>إدارة أعمال فعالة ومنظمة بشكل احترافي</p>
                </div>
              </div>
            </div>
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
