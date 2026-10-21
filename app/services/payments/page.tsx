import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/Sections";

export const metadata: Metadata = { title: "حلول الدفع الإلكتروني" };

const paymentServices = [
  { title: "فواتير الاتصالات", desc: "اشحن رصيدك وادفع فواتير هاتفك والإنترنت بكل سهولة متاح لكل مشغلي الشبكات في مصر .", image: "1.png" },
  { title: "المرافق", desc: "ادفع فواتير الكهرباء والمياه والغاز دون انتظار شركات متعددة متاحة عبر التطبيق .", image: "2.png" },
  { title: "التأمينات", desc: "سدد أقساطك لدى أفضل شركات التأمين بسهولة مصر لتأمينات الحياة، أليانز، أكسا، وغيرها .", image: "3.png" },
  { title: "النقابات", desc: "سدد اشتراكات النقابات المهنية من منزلك المهندسين، الأطباء، البيطريين وغيرهم .", image: "4.png" },
  { title: "التعليم", desc: "سداد رسوم المدارس والجامعات بسهولة وأمان أكثر من 40 جامعة ومؤسسة تعليمية .", image: "5.png" },
  { title: "التبرعات", desc: "تبرع للجهات الخيرية بكل سهولة وأمان مصر الخير، بنك الطعام، 57357 وغيرهم .", image: "6.png" },
  { title: "التذاكر", desc: "احجز وسدد ثمن تذاكر الطيران، الباص، السينما بسهولة مصر للطيران، جو باص، السينمات وأكثر .", image: "7.png" },
  { title: "العقارات", desc: "سدد أقساطك العقارية بكل أمان عبر التطبيق بالم هيلز، مارينا، لا فيستا، والمزيد .", image: "8.png" },
  { title: "الالتزامات المالية", desc: "سدد أقساطك البنكية بلمسة زر ValU ، Contact ، MoneyFellows بنك الإسكندرية وأكثر .", image: "9.png" },
  { title: "المدفوعات عبر الانترنت", desc: "سدد مشترياتك بكل سهولة عبر الانترنت سويفل، بي تك، طلبات، أوليكس وغيرهم .", image: "10.png" },
  { title: "اشتراكات النوادي", desc: "جدد اشتراك ناديك بسرعة وسهولة الجزيرة، الصيد، دجلة، سوديك والمزيد .", image: "11.png" },
  { title: "غرامات المرور", desc: "ادفع غراماتك واطلب رخصتك أونلاين بكل سهولة .", image: "12.png" },
  { title: "الخدمة العسكرية", desc: "احصل على تصاريح السفر وشهادات الإعفاء بسهولة .", image: "13.png" },
  { title: "الرقم المرجعي من فوري باى", desc: "ادفع برقمك المرجعي بكل سهولة عبر تطبيقنا .", image: "14.png" },
];

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
      <section className="section payment-services-section">
        <div className="container">
          <div className="payment-services-heading">
            <span>حلول متنوعة</span>
            <h2>خدمات دفع تناسب احتياجاتك</h2>
            <p>مرّر على الخدمة لاستكشاف المزيد عنها.</p>
          </div>
          <div className="payment-services-cards">
            {paymentServices.map((service, index) => (
              <article className="payment-service-card" key={service.image} tabIndex={0}>
                <div className="payment-service-front">
                  <span className="payment-service-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="payment-service-image">
                    <Image
                      src={`/images/s_img/section_2/${service.image}`}
                      alt=""
                      width={112}
                      height={112}
                      sizes="112px"
                    />
                  </div>
                  <h3>{service.title}</h3>
                  <span className="payment-service-hint" aria-hidden="true">↗</span>
                </div>
                <div className="payment-service-reveal">
                  <span>اكتشف الخدمة</span>
                  <p>{service.desc}</p>
                  <i aria-hidden="true">↗</i>
                </div>
              </article>
            ))}
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
