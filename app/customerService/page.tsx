import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { Mail, Phone, AlertCircle, ShoppingCart, Send } from "lucide-react";
export const metadata: Metadata = { title: "تقديم بلاغ" };
export default function CustomerService() {
  return (
    <main>
      <PageHero
        eyebrow="تقديم بلاغ"
        title="نحن هنا"
        highlight="لمساعدتك."
        desc="هل لديك شكوى، أو تريد طلب ماكينة دفع، أو تحتاج لمساعدة؟ فريق خدمة العملاء جاهز لخدمتك."
        number="08"
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-aside">
            <span className="eyebrow">اختر الخدمة</span>
            <h2>
              كيف يمكننا
              <br />
              <em>مساعدتك؟</em>
            </h2>
            <p>
              اختر نوع الخدمة التي تحتاجها، وسنتواصل معك في أسرع وقت ممكن.
            </p>
            <div className="contact-method">
              <span>
                <AlertCircle size={19} />
              </span>
              <div>
                <small>شكوى أو مشكلة</small>
                <b>بلغنا عن أي مشكلة تواجهها</b>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <ShoppingCart size={19} />
              </span>
              <div>
                <small>طلب ماكينة دفع</small>
                <b>اطلب ماكينة POS لمتجرك</b>
              </div>
            </div>
            <div className="contact-method">
              <span>
                <Phone size={19} />
              </span>
              <div>
                <small>تواصل مباشر</small>
                <a href="mailto:roya.tech2025@gmail.com">
                  roya.tech2025@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">الاسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="اسمك الكامل"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="رقم هاتفك"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="بريدك الإلكتروني"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">نوع الطلب</label>
                <select id="type" name="type" required>
                  <option value="">اختر نوع الطلب</option>
                  <option value="complaint">شكوى</option>
                  <option value="machine">طلب ماكينة دفع</option>
                  <option value="inquiry">استفسار عام</option>
                  <option value="technical">مشكلة تقنية</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">تفاصيل الطلب</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="اكتب تفاصيل طلبك هنا..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                تقديم البلاغ <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
