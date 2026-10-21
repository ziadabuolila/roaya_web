import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/Sections";
import TeamMemberImage from "@/components/TeamMemberImage";
import {
  BriefcaseBusiness,
  Code2,
  UsersRound,
  Handshake,
  Linkedin,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react";
export const metadata: Metadata = { title: "إدارة الشركة" };
const roles = [
  {
    I: BriefcaseBusiness,
    t: "القيادة والإدارة",
    d: "تحديد الرؤية والأولويات ومتابعة جودة الخدمات وتطورها.",
  },
  {
    I: Code2,
    t: "الهندسة والتطوير",
    d: "تحويل المتطلبات إلى حلول تقنية عملية وقابلة للتطور.",
  },
  {
    I: UsersRound,
    t: "التشغيل وخدمة العملاء",
    d: "متابعة الاحتياجات وتسهيل التواصل طوال رحلة الخدمة.",
  },
  {
    I: Handshake,
    t: "الشراكات وتطوير الأعمال",
    d: "بناء علاقات عمل تساعد على تقديم قيمة مستدامة.",
  },
];

const teamMembers = [
  {
    name: "المهندس عماد ابوليله",
    position: "رئيس مجلس الإدارة",
    image: "/images/team/Emad.png",
    phone: "01100730060",
    whatsapp: "https://wa.me/201100730060",
    facebook: "https://www.facebook.com/share/18n25Y83j9/",
    linkedin: "https://www.linkedin.com/in/emad-abuolila-76a744252",
    email: "emad.abuolila@gmail.com",
  },
  {
    name: "المهندس بلال زيدان",
    position: "العضو المنتدب",
    image: "/images/team/Belal.jpg",
    phone: "01100730060",
    whatsapp: "https://wa.me/201100730060",
    facebook: "https://www.facebook.com/share/18n25Y83j9/",
    linkedin: "https://www.linkedin.com/in/emad-abuolila-76a744252",
    email: "emad.abuolila@gmail.com",
  },  
];

export default function Team() {
  return (
    <main>
      <PageHero
        eyebrow="إدارة الشركة"
        title="قيادة تخطط،"
        highlight="وفريق يحوّل الرؤية إلى واقع."
        desc="وراء كل تجربة ناجحة تعاون بين الإدارة والتقنية والتشغيل؛ فريق واحد يعمل لتحقيق هدف مشترك."
        number="02"
      />
      <section className="section">
        <div className="container team-intro">
          <div>
            <span className="eyebrow">فريق رؤية باي</span>
            <h2>
              تبدأ الرؤية بالقيادة،
              <br />
              <em>ويتحقق النجاح بعمل الفريق.</em>
            </h2>
          </div>
          <div>
            <p>
              نؤمن بأن جودة الحل لا تعتمد على التقنية وحدها، بل تقوم أيضًا على
              التعاون وفهم احتياجات العملاء والاهتمام بالتفاصيل منذ التخطيط وحتى
              التنفيذ.
            </p>
            <p>
              نحرص على عرض المعلومات الدقيقة، لذلك لا ننشر أسماء أو مناصب غير
              مؤكدة. ويمكن تحديث الصفحة بالملفات الرسمية للإدارة وصورها المعتمدة
              عند توفرها.
            </p>
          </div>
        </div>
        <div className="team-values-grid">
          {roles.map(({ I, t, d }, i) => (
            <article key={t} className="team-role">
              <div className="role-top">
                <span className="role-icon">
                  <I size={23} />
                </span>
                <small>0{i + 1}</small>
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
              <div className="role-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="section team-members-section">
        <div className="container">
          <div className="center-intro">
            <span className="eyebrow">القيادة التنفيذية</span>
            <h2>
              قادة يصنعون
              <br />
              <em>الفرق.</em>
            </h2>
            <p>
              فريق من الخبراء المتخصصين يسعون دائمًا لتحقيق التميز والابتكار في
              كل ما نقدمه.
            </p>
          </div>

          <div className="team-members-grid">
            {teamMembers.map((member, i) => (
              <article className="team-member-card" key={member.name}>
                <div className="member-header">
                  <div className="member-image-container">
                    <TeamMemberImage src={member.image} alt={member.name} />
                  </div>
                </div>

                <div className="member-body">
                  <div className="member-name-section">
                    <h3>{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                  </div>

                  <div className="member-divider" />

                  <div className="member-phone">
                    <a
                      href={`tel:${member.phone}`}
                      className="phone-number"
                    >
                      {member.phone}
                    </a>
                  </div>

                  <div className="member-divider" />

                  <div className="member-contact">
                    <span className="contact-label">تواصل معي</span>
                    <div className="member-social">
                      <a
                        href={member.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link whatsapp"
                        aria-label="واتساب"
                      >
                        <MessageCircle size={18} />
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link facebook"
                        aria-label="فيس بوك"
                      >
                        <Facebook size={18} />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link linkedin"
                        aria-label="لينكد إن"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="social-link email"
                        aria-label="إيميل"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-note-section">
        <div className="container">
          <div className="team-note">
            <span className="eyebrow">يسعدنا التواصل معك</span>
            <h2>
              هل لديك مشروع يحتاج إلى
              <br />
              <em>فريق يفهمه؟</em>
            </h2>
            <p>شاركنا فكرتك لنساعدك على تحديد التخصصات والخطوات المطلوبة.</p>
            <a href="/contactUs" className="button button-dark">
              تواصل مع الفريق
            </a>
            <span className="note-orb" />
          </div>
        </div>
      </section>
      <CTA
        title="معًا نحقق المزيد."
        desc="تواصل معنا وابدأ الخطوة الأولى في مشروعك."
      />
    </main>
  );
}
