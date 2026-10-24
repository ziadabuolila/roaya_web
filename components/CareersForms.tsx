"use client";

import { useState, type FormEvent } from "react";
import { FileUp, Send } from "lucide-react";

export default function ApplicationForm() {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const track = String(form.get("track") ?? "").trim();
    const background = String(form.get("background") ?? "").trim();
    const subject = encodeURIComponent(`طلب تقديم لوظيفة من ${name}`);
    const body = encodeURIComponent(
      `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nرقم الهاتف: ${phone}\nالمسمى الوظيفي: ${track}\nالخبرة: ${background}\n${fileName ? `اسم الملف المراد إرفاقه: ${fileName}\nيرجى إرفاق الملف بهذا البريد قبل الإرسال.` : "يرجى إرسال الطلب ومشاركة أي مستندات داعمة عند الحاجة."}`,
    );
    window.location.href = `mailto:roya.tech2025@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="career-form" onSubmit={submit}>
      <div className="career-form-grid">
        <label>الاسم بالكامل<input name="name" autoComplete="name" placeholder="اكتب اسمك" required /></label>
        <label>البريد الإلكتروني<input name="email" type="email" autoComplete="email" placeholder="name@example.com" required /></label>
        <label>رقم الهاتف<input name="phone" type="tel" autoComplete="tel" placeholder="01xxxxxxxxx" required /></label>
        <label>المسمى الوظيفي<input name="track" placeholder="مثال: مطور واجهات" required /></label>
        <label className="career-form-wide">الخبرة والمهارات<textarea name="background" rows={3} placeholder="اكتب نبذة مختصرة عن خبرتك ومهاراتك" required /></label>
        <label className="career-file career-form-wide">
          <FileUp size={19} />
          <span><strong>أرفق سيرتك الذاتية</strong><small>{fileName || "PDF أو Word — سيتم فتح رسالة بريد لإرفاق الملف وإرسال الطلب"}</small></span>
          <input name="attachment" type="file" accept=".pdf,.doc,.docx" required onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")} />
        </label>
      </div>
      <p className="career-form-note">بالضغط على الزر هتتفتح رسالة بريد إلكتروني فيها بياناتك. أرفق السيرة الذاتية في الرسالة واضغط إرسال لإكمال التقديم.</p>
      <button className="career-submit" type="submit">{sent ? "إعادة تجهيز رسالة البريد" : "تجهيز طلب التقديم"}<Send size={17} /></button>
    </form>
  );
}

const scholarshipLanguages = ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "My SQL", "Android", "Full Stack Web", "Full Stack Android"];

export function ScholarshipApplicationForm() {
  const [prepared, setPrepared] = useState(false);
  const [languageError, setLanguageError] = useState("");
  const [motivationLength, setMotivationLength] = useState(0);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (key: string) => String(form.get(key) ?? "").trim();
    const languages = form.getAll("languages").map(String);
    if (languages.length === 0) {
      setLanguageError("اختار لغة أو مسارًا واحدًا على الأقل عشان نعرف اهتمامك.");
      document.getElementById("scholarship-languages")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setLanguageError("");
    const fields = [
      ["الاسم بالكامل", get("fullName")],
      ["اسم الكلية", get("college")],
      ["العنوان", get("address")],
      ["رقم الهاتف", get("phone")],
      ["السن", get("age")],
      ["النسبة المئوية للسنة السابقة", `${get("percentage")}%`],
      ["هل لديك جهاز كمبيوتر؟", get("computer") === "yes" ? "نعم" : "لا"],
      ["اللغات/المسارات التي أريد تعلمها", languages.join("، ") || "لم يتم الاختيار"],
      ["لماذا أريد تعلم البرمجة؟", get("motivation")],
      ["معرفتي بالبرمجة", get("programmingKnowledge")],
      ["مواعيدي المناسبة", get("availability")],
      ["طريقة التعلم المفضلة", get("attendance") === "onsite" ? "حضوري بمقر الشركة" : "أونلاين"],
    ];
    const subject = encodeURIComponent(`طلب التقديم على المنحة البرمجية — ${get("fullName")}`);
    const body = encodeURIComponent(`${fields.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nيرجى مراجعة طلبي والتواصل معي لاستكمال خطوات المنحة.`);
    window.location.href = `mailto:roya.tech2025@gmail.com?subject=${subject}&body=${body}`;
    setPrepared(true);
  };

  return (
    <form className="career-form scholarship-form" onSubmit={submit}>
      <div className="scholarship-form-section">
        <div className="scholarship-section-heading"><span>01</span><div><strong>بياناتك الأساسية</strong><small>خلّينا نتعرف عليك ونتواصل معاك</small></div></div>
        <div className="career-form-grid">
          <label>الاسم بالكامل<input name="fullName" autoComplete="name" placeholder="اكتب اسمك رباعي" required /></label>
          <label>اسم الكلية<input name="college" placeholder="اسم الكلية والجامعة" required /></label>
          <label className="career-form-wide">العنوان<input name="address" autoComplete="street-address" placeholder="المحافظة والمنطقة والعنوان" required /></label>
          <label>رقم الهاتف<input name="phone" type="tel" autoComplete="tel" placeholder="01xxxxxxxxx" required /></label>
          <label>السن<input name="age" type="number" min="1" max="100" inputMode="numeric" placeholder="عمرك" required /></label>
          <label>النسبة المئوية للسنة السابقة<input name="percentage" type="number" min="0" max="100" step="0.01" inputMode="decimal" placeholder="مثال: 85" required /></label>
        </div>
      </div>

      <fieldset className="scholarship-form-section">
        <legend className="scholarship-section-heading"><span>02</span><span><strong>إمكانياتك واهتماماتك</strong><small>اختار الإجابات اللي تناسبك</small></span></legend>
        <div className="scholarship-question"><strong>هل لديك جهاز كمبيوتر؟</strong><div className="scholarship-options">
          {[ ["yes", "نعم، متوفر لدي"], ["no", "لا، غير متوفر"] ].map(([value, label]) => <label className="scholarship-option" key={value}><input type="radio" name="computer" value={value} required /><span className="scholarship-control" /><span>{label}</span></label>)}
        </div></div>
        <div className="scholarship-question" id="scholarship-languages"><strong>ما اللغات أو المسارات التي تريد تعلمها؟ <small>يمكن اختيار أكثر من مسار</small></strong><div className="scholarship-options scholarship-language-options">
          {scholarshipLanguages.map((language) => <label className="scholarship-option" key={language}><input type="checkbox" name="languages" value={language} onChange={() => setLanguageError("")} /><span className="scholarship-control" /><span>{language}</span></label>)}
        </div></div>
        {languageError && <p className="scholarship-validation" role="alert">{languageError}</p>}
        <label className="scholarship-long-answer">لماذا تريد تعلم البرمجة؟
          <span className="scholarship-textarea-shell">
            <textarea name="motivation" rows={4} maxLength={1000} onChange={(event) => setMotivationLength(event.target.value.length)} placeholder="احكيلنا عن هدفك، وإيه اللي نفسك تحققه بتعلم البرمجة..." required aria-describedby="scholarship-motivation-count" />
            <small id="scholarship-motivation-count">{motivationLength} / 1000</small>
          </span>
        </label>
        <div className="scholarship-question"><strong>هل تعرف شيئًا عن البرمجة؟</strong><div className="scholarship-options">
          {[ ["أعرف", "أعرف بعض الأساسيات"], ["لا أعرف", "لا أعرف عنها"], ["سمعت عنها", "قد سمعت عنها"] ].map(([value, label]) => <label className="scholarship-option" key={value}><input type="radio" name="programmingKnowledge" value={value} required /><span className="scholarship-control" /><span>{label}</span></label>)}
        </div></div>
      </fieldset>

      <fieldset className="scholarship-form-section">
        <legend className="scholarship-section-heading"><span>03</span><span><strong>الوقت وطريقة التعلم</strong><small>ساعدنا نعرف الأنسب لظروفك</small></span></legend>
        <div className="scholarship-question"><strong>ما مواعيدك المناسبة؟</strong><div className="scholarship-options">
          {[ ["صباحي", "الفترة الصباحية"], ["مسائي", "الفترة المسائية"], ["حسب المتاح", "على حسب الوقت المتاح"] ].map(([value, label]) => <label className="scholarship-option" key={value}><input type="radio" name="availability" value={value} required /><span className="scholarship-control" /><span>{label}</span></label>)}
        </div></div>
        <div className="scholarship-question"><strong>كيف تفضل حضور المنحة؟</strong><div className="scholarship-options">
          {[ ["onsite", "حضوري بمقر الشركة"], ["online", "أونلاين"] ].map(([value, label]) => <label className="scholarship-option" key={value}><input type="radio" name="attendance" value={value} required /><span className="scholarship-control" /><span>{label}</span></label>)}
        </div></div>
      </fieldset>

      <p className="career-form-note">بالضغط على الزر هتتفتح رسالة بريد فيها كل إجاباتك. راجعها واضغط إرسال لإكمال تقديم الطلب.</p>
      <button className="career-submit" type="submit">{prepared ? "إعادة تجهيز طلب التقديم" : "إرسال طلب المنحة"}<Send size={17} /></button>
    </form>
  );
}
