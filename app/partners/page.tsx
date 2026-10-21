import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA } from "@/components/Sections";
import {
  Handshake,
  Network,
  Sparkles,
  ArrowUpLeft,
  CheckCircle2,
} from "lucide-react";
export const metadata: Metadata = { title: "شركاؤنا" };
export default function Partners() {
  return (
    <main>
      <PageHero
        eyebrow="شركاؤنا"
        title="القيمة الأكبر"
        highlight="نصنعها معًا."
        desc="نؤمن بأن التعاون الفعّال يفتح فرصًا جديدة ويجمع الخبرات لتقديم قيمة أكبر للعملاء."
        number="05"
      />
      <section className="section">
        <div className="container partner-intro">
          <div>
            <span className="eyebrow">شراكة بمعنى حقيقي</span>
            <h2>
              لا تقتصر الشراكة على الأسماء،
              <br />
              <em>بل تقوم على أهداف مشتركة.</em>
            </h2>
          </div>
          <p>
            تقوم الشراكات الناجحة على الثقة، ووضوح الأدوار، وفهم القيمة التي
            يقدمها كل طرف. نسعى إلى بناء علاقات تساعد على تطوير الخدمات وتوسيع
            فرص التعاون.
          </p>
        </div>
        <div className="container partner-principles">
          <article>
            <span>
              <Handshake />
            </span>
            <h3>ثقة متبادلة</h3>
            <p>تواصل واضح وتوقعات محددة من البداية.</p>
          </article>
          <article>
            <span>
              <Network />
            </span>
            <h3>تكامل الخبرات</h3>
            <p>يسهم كل طرف بخبرته للوصول إلى نتائج أفضل.</p>
          </article>
          <article>
            <span>
              <Sparkles />
            </span>
            <h3>قيمة مستدامة</h3>
            <p>نركز على تعاون يخلق فرصًا على المدى الطويل.</p>
          </article>
        </div>
      </section>
      <section className="section partners-dark">
        <div className="container partner-callout">
          <div className="partner-graphic">
            <div className="partner-circle circle-1" />
            <div className="partner-circle circle-2" />
            <div className="partner-center">
              <Handshake size={34} />
              <span>TOGETHER</span>
            </div>
            <span className="partner-node pn-1">
              <CheckCircle2 />
            </span>
            <span className="partner-node pn-2">
              <Network />
            </span>
            <span className="partner-node pn-3">
              <Sparkles />
            </span>
          </div>
          <div>
            <span className="eyebrow light">انضم إلى شبكة التعاون</span>
            <h2>
              هل لديك فكرة لشراكة؟
              <br />
              <em>لنبدأ الحوار.</em>
            </h2>
            <p>
              سواء أكنت تقدم خدمة، أو تمثل شركة تقنية، أو تبحث عن التكامل،
              شاركنا تصورك لنناقش فرص التعاون المتاحة.
            </p>
            <Link href="/contactUs" className="button button-light">
              اقترح شراكة <ArrowUpLeft size={16} />
            </Link>
          </div>
        </div>
      </section>
      <CTA
        title="تبدأ الشراكة الناجحة بحوار واضح."
        desc="أرسل إلينا فكرة التعاون لنحدد معًا الخطوة التالية."
      />
    </main>
  );
}
