import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/Sections";
import { Network, ArrowUpLeft, ShieldCheck, Workflow, Zap } from "lucide-react";

export const metadata: Metadata = { title: "الربط والتكامل" };

const integrationServices = [
  [
    "ربط API",
    "تكامل مع أنظمة خارجية عبر واجهات برمجية قوية وآمنة.",
  ],
  [
    "أتمتة العمليات",
    "تقليل الخطوات اليدوية وتسهيل تدفق البيانات بين الأنظمة.",
  ],
  [
    "تزامن البيانات",
    "ضمان دقة وتحديث البيانات في الوقت الفعلي بين المنصات.",
  ],
  [
    "مراقبة ودعم",
    "خدمات متابعة مستمرة لدعم واستقرار التكاملات.",
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

export default function IntegrationPage() {
  return (
    <main>
      <PageHero
        eyebrow="الربط والتكامل"
        title="كل أنظمتك،"
        highlight="تتواصل فيما بينها."
        desc="نناقش متطلبات التكامل بين منصاتك وخدماتك لتسهيل تدفق البيانات وتقليل الخطوات اليدوية."
        number="03"
      />
      <section className="section">
        <div className="container">
          <div className="service-detail-page">
            <div className="service-page-icon integration">
              <Network size={40} />
            </div>
            <h2>حلول تكامل متقدمة</h2>
            <p>
              نساعدك على ربط أنظمتك ومنصاتك المختلفة لإنشاء تجربة متكاملة وسلسة،
              مع ضمان أمان البيانات واستقرار العمليات.
            </p>
            <div className="service-rows-list">
              {integrationServices.map(([title, desc], index) => (
                <ServiceRow key={title} title={title} desc={desc} index={index} />
              ))}
            </div>
            <div className="service-features">
              <div className="feature-item">
                <ShieldCheck size={24} />
                <div>
                  <h3>أمان البيانات</h3>
                  <p>تشفير وآليات حماية متقدمة للبيانات المتداولة</p>
                </div>
              </div>
              <div className="feature-item">
                <Workflow size={24} />
                <div>
                  <h3>أتمتة ذكية</h3>
                  <p>تقليل المهام اليدوية وتحسين الكفاءة التشغيلية</p>
                </div>
              </div>
              <div className="feature-item">
                <Zap size={24} />
                <div>
                  <h3>سرعة الأداء</h3>
                  <p>معالجة البيانات بسرعة وموثوقية عالية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA
        title="هل تحتاج تكاملات معقدة؟"
        desc="خبراؤنا مستعدون لمناقشة احتياجات التكامل الخاصة بك."
      />
    </main>
  );
}
