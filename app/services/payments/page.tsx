import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/Sections";
import { CreditCard, ArrowUpLeft, ShieldCheck, Smartphone, ReceiptText } from "lucide-react";

export const metadata: Metadata = { title: "حلول الدفع الإلكتروني" };

const paymentServices = [
  [
    "بوابات الدفع الإلكتروني",
    "دعم متعدد لقنوات الدفع الرقمية عبر المنصات المتنوعة.",
  ],
  [
    "نقاط البيع والتحصيل",
    "أدوات تساعد على استقبال المدفوعات وتنظيم عمليات التحصيل بكفاءة.",
  ],
  [
    "سداد الفواتير والخدمات",
    "تجربة أكثر سهولة للوصول إلى مجموعة من خدمات السداد المتنوعة.",
  ],
  [
    "تكامل قنوات الدفع",
    "مناقشة احتياجات الربط مع الأنظمة والمنصات ذات الصلة لتسهيل العمليات.",
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

export default function PaymentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="حلول الدفع"
        title="الدفع والتحصيل،"
        highlight="بخطوات أسهل."
        desc="حلول تساعد على جعل رحلة الدفع أكثر سلاسة، مع مراعاة متطلبات النشاط وتجربة المستخدم."
        number="01"
      />
      <section className="section">
        <div className="container">
          <div className="service-detail-page">
            <div className="service-page-icon">
              <CreditCard size={40} />
            </div>
            <h2>حلول الدفع المتكاملة</h2>
            <p>
              نقدم مجموعة من حلول الدفع الإلكتروني التي تساعد الأفراد والشركات على
              استقبال المدفوعات وإدارة عمليات التحصيل بكفاءة وأمان.
            </p>
            <div className="service-rows-list">
              {paymentServices.map(([title, desc], index) => (
                <ServiceRow key={title} title={title} desc={desc} index={index} />
              ))}
            </div>
            <div className="service-features">
              <div className="feature-item">
                <ShieldCheck size={24} />
                <div>
                  <h3>أمان عالي</h3>
                  <p>تشفير البيانات وحماية المعاملات المالية</p>
                </div>
              </div>
              <div className="feature-item">
                <Smartphone size={24} />
                <div>
                  <h3>سهولة الاستخدام</h3>
                  <p>تجربة دفع سلسة وسريعة للمستخدمين</p>
                </div>
              </div>
              <div className="feature-item">
                <ReceiptText size={24} />
                <div>
                  <h3>تقارير مفصلة</h3>
                  <p>متابعة المعاملات والإحصائيات في الوقت الفعلي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA
        title="هل تحتاج حلول دفع مخصصة؟"
        desc="ناقش معنا احتياجاتك وسنساعدك في اختيار الحل الأنسب."
      />
    </main>
  );
}
