import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA } from "@/components/Sections";
import {
  CreditCard,
  ReceiptText,
  Smartphone,
  Code2,
  Blocks,
  Network,
  ArrowUpLeft,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
export const metadata: Metadata = { title: "خدماتنا" };
const payment = [
  [
    "حلول الدفع الإلكتروني",
    "دعم تجربة دفع رقمية واضحة عبر القنوات المناسبة لطبيعة النشاط.",
  ],
  [
    "نقاط البيع والتحصيل",
    "أدوات تساعد على استقبال المدفوعات وتنظيم عمليات التحصيل.",
  ],
  [
    "سداد الفواتير والخدمات",
    "تجربة أكثر سهولة للوصول إلى مجموعة من خدمات السداد.",
  ],
  ["تكامل قنوات الدفع", "مناقشة احتياجات الربط مع الأنظمة والمنصات ذات الصلة."],
];
const software = [
  ["المواقع الإلكترونية", "مواقع تعريفية وتجارية بهوية واضحة وتجربة متجاوبة."],
  ["تطبيقات الهواتف الذكية", "تطبيقات مصممة حول رحلة المستخدم وأهداف المشروع."],
  ["أنظمة إدارة الأعمال", "لوحات تشغيل وإدارة ومتابعة تناسب سير العمل."],
  ["التقارير والبيانات", "تنظيم المعلومات وعرض المؤشرات بصورة مفهومة."],
];
function ServiceRows({ items }: { items: string[][] }) {
  return (
    <div className="service-rows">
      {items.map(([t, d], i) => (
        <article key={t}>
          <span className="service-row-num">0{i + 1}</span>
          <div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
          <ArrowUpLeft size={19} />
        </article>
      ))}
    </div>
  );
}
export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="خدماتنا"
        title="حلول تفهم"
        highlight="احتياجك."
        desc="مجموعة من حلول الدفع والتقنية تساعد الأفراد والشركات على تبسيط العمليات وتطوير التجربة الرقمية."
        number="04"
      />
      <section className="section" id="payments">
        <div className="container service-detail-grid">
          <div className="service-detail-head">
            <span className="large-service-icon">
              <CreditCard size={28} />
            </span>
            <span className="eyebrow">01 / PAYMENT SOLUTIONS</span>
            <h2>
              الدفع والتحصيل،
              <br />
              <em>بخطوات أسهل.</em>
            </h2>
            <p>
              حلول تساعد على جعل رحلة الدفع أكثر سلاسة، مع مراعاة متطلبات النشاط
              وتجربة المستخدم.
            </p>
            <Link href="/services/payments" className="text-link">
              تفاصيل حلول الدفع <ArrowUpLeft size={17} />
            </Link>
          </div>
          <ServiceRows items={payment} />
        </div>
      </section>
      <section className="section service-detail-alt" id="software">
        <div className="container service-detail-grid">
          <div className="service-detail-head">
            <span className="large-service-icon violet">
              <Code2 size={28} />
            </span>
            <span className="eyebrow">02 / SOFTWARE DEVELOPMENT</span>
            <h2>
              برمجيات تنطلق
              <br />
              <em>من فكرتك.</em>
            </h2>
            <p>
              نبني مواقع وتطبيقات وأنظمة رقمية تستجيب لاحتياجات المستخدمين
              وطبيعة العمل.
            </p>
            <Link href="/services/software" className="text-link">
              تفاصيل تطوير البرمجيات <ArrowUpLeft size={17} />
            </Link>
          </div>
          <ServiceRows items={software} />
        </div>
      </section>
      <section className="section" id="integration">
        <div className="container integration-card">
          <div className="integration-art">
            <div className="integration-node node-a">
              <CreditCard />
            </div>
            <div className="integration-node node-b">
              <Blocks />
            </div>
            <div className="integration-node node-c">
              <BarChart3 />
            </div>
            <div className="integration-hub">
              <Network size={30} />
              <span>API</span>
            </div>
            <span className="integration-line line-a" />
            <span className="integration-line line-b" />
            <span className="integration-line line-c" />
          </div>
          <div className="integration-copy">
            <span className="eyebrow">03 / INTEGRATION</span>
            <h2>
              كل أنظمتك،
              <br />
              <em>تتواصل فيما بينها.</em>
            </h2>
            <p>
              نناقش متطلبات التكامل بين منصاتك وخدماتك لتسهيل تدفق البيانات
              وتقليل الخطوات اليدوية، مع تحديد نطاق التنفيذ وفق احتياجك.
            </p>
            <div className="integration-benefits">
              <span>
                <ShieldCheck size={16} /> تنظيم أفضل
              </span>
              <span>
                <Network size={16} /> ربط مرن
              </span>
              <span>
                <ReceiptText size={16} /> تدفق أوضح
              </span>
            </div>
            <Link href="/contactUs" className="button button-dark">
              اسأل عن التكامل <ArrowUpLeft size={16} />
            </Link>
          </div>
        </div>
      </section>
      <CTA
        title="لم تجد الخدمة التي تبحث عنها؟"
        desc="أخبرنا عن التحدي الذي ترغب في معالجته، وسنحدد معًا أنسب طريقة للبدء."
      />
    </main>
  );
}
