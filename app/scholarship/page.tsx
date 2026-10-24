import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpLeft, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/Sections";
import { ScholarshipApplicationForm } from "@/components/CareersForms";

export const metadata: Metadata = { title: "التقديم على المنحة البرمجية" };

export default function ScholarshipPage() {
  return (
    <main className="careers-page scholarship-page">
      <PageHero
        eyebrow="ابدأ رحلتك التقنية"
        title="تعلّم اليوم،"
        highlight="وابنِ الغد."
        desc="قدّم للمنحة البرمجية وعرّفنا بنفسك، واللغات اللي حابب تتعلمها، والوقت وطريقة التعلم الأنسب ليك."
        number="09"
      />
      <section className="section careers-section">
        <div className="container">
          <div className="careers-intro"><span>المنحة البرمجية</span><h2>قدّم طلبك وابدأ من هنا.</h2><p>املأ بياناتك واختار المسارات البرمجية اللي مهتم بيها، ومواعيدك وطريقة الحضور المناسبة ليك.</p></div>
          <div className="careers-forms">
            <section className="career-card" id="scholarship">
              <span className="career-card-icon"><GraduationCap size={24} /></span>
              <div className="career-card-heading"><span>طلب تقديم</span><h2>التقديم على المنحة</h2><p>إجاباتك هتساعد فريقنا يتعرف عليك ويراجع مدى مناسبة المسار والوقت ليك.</p></div>
              <ScholarshipApplicationForm />
            </section>
            <Link className="career-contact-link" href="/careers">تبحث عن وظيفة؟ انتقل لصفحة التقديم للوظائف <ArrowUpLeft size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
