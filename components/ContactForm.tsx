"use client";
import { useState } from "react";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "حلول الدفع الإلكتروني",
    message: "",
  });
  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `طلب تواصل من ${form.name} — ${form.service}`,
    );
    const body = encodeURIComponent(
      `الاسم: ${form.name}\nالبريد: ${form.email}\nالهاتف: ${form.phone}\nالخدمة: ${form.service}\n\nالتفاصيل:\n${form.message}`,
    );
    window.location.href = `mailto:roya.tech2025@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">نبدأ من هنا</span>
        <h2>أخبرنا عن فكرتك.</h2>
        <p>املأ التفاصيل ليتمكن فريقنا من تكوين صورة أوضح عن احتياجاتك.</p>
      </div>
      <div className="form-row">
        <label>
          الاسم بالكامل
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="الاسم بالكامل ..."
            required
          />
        </label>
        <label>
          البريد الإلكتروني
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            placeholder="البريد الالكتروني ..."
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          رقم الهاتف
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="رقم الهاتف ..."
          />
        </label>
        <label>
          الخدمة المطلوبة
          <select name="service" value={form.service} onChange={update}>
            <option>حلول الدفع الإلكتروني</option>
            <option>تطوير موقع أو تطبيق</option>
            <option>أنظمة إدارة الأعمال</option>
            <option>الربط والتكامل API</option>
            <option>شراكة أو استفسار عام</option>
          </select>
        </label>
      </div>
      <label>
        أخبرنا بالمزيد
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          placeholder="ما الفكرة التي ترغب في أن نعمل عليها معًا؟"
          rows={5}
          required
        />
      </label>
      <button className="button button-dark submit-btn" type="submit">
        {sent ? "تم تجهيز رسالة البريد الإلكتروني" : "إرسال طلب التواصل"}{" "}
        <Send size={16} />
      </button>
    </form>
  );
}
