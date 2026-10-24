import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import ApplicationForm from "@/components/CareersForms";
import { ArrowUpLeft, BriefcaseBusiness } from "lucide-react";

export const metadata: Metadata = { title: "التقديم للوظائف" };

export default function CareersPage() {
  return (
    <main className="careers-page">
      <PageHero
        eyebrow="انضم إلى فريقنا"
        title="خلّي خبرتك"
        highlight="تعمل فرقًا."
        desc="استقبلنا طلبات التقديم للوظائف. عرّفنا بنفسك وخبرتك وأرفق سيرتك الذاتية ليصل طلبك إلى فريق رؤية باي."
        number="08"
      />
      <section className="section careers-section">
        <div className="container">
          <div className="careers-intro"><span>التقديم الوظيفي</span><h2>خطوتك المهنية القادمة تبدأ هنا.</h2><p>املأ بياناتك وحدد التخصص أو المسمى المناسب. أرفق السيرة الذاتية، وسنراجع طلبك ونتواصل معك عند توفر فرصة مناسبة.</p></div>
          <div className="careers-forms">
            <section className="career-card" id="jobs">
              <span className="career-card-icon"><BriefcaseBusiness size={23} /></span>
              <div className="career-card-heading"><span>فرص العمل</span><h2>قدّم على وظيفة</h2><p>استقبال طلبات التقديم متاح. اكتب المسمى الوظيفي أو مجال خبرتك وأرسل سيرتك الذاتية للفريق.</p></div>
              <ApplicationForm />
            </section>
            <a className="career-contact-link" href="/scholarship">مهتم بالمنحة البرمجية؟ انتقل لصفحة التقديم <ArrowUpLeft size={16} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
