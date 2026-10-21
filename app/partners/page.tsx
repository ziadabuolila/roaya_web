import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "شركاؤنا" };

const partners = [
  { name: "Basata", image: "/images/partners/basata.png" },
  { name: "Damen", image: "/images/partners/damen.png" },
  { name: "Fawry", image: "/images/partners/fawry.png" },
  { name: "Insidx", image: "/images/partners/insidx.png" },
  { name: "Theqa", image: "/images/partners/theqa.png" },
];

export default function Partners() {
  return (
    <main>
      <PageHero
        eyebrow="شركاؤنا"
        title="القيمة الأكبر"
        highlight="نصنعها معًا."
        desc="نفخر بشركائنا الذين يجمعون خبراتهم معنا لتقديم خدمات أفضل."
        number="05"
      />

      <section className="section partner-gallery-section" aria-label="شركاؤنا">
        <div className="container">
          <div className="partner-logo-grid">
            {partners.map((partner) => (
              <article
                className="partner-logo-card"
                key={partner.image}
                tabIndex={0}
                aria-label={partner.name}
              >
                <span className="partner-logo-caption">{partner.name}</span>
                <div className="partner-logo-image-wrap">
                  <img src={partner.image} alt={partner.name} />
                </div>
                <span className="partner-card-glint" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
