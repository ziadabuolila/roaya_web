export default function Loading() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      <span className="page-loading-mark">
        <img src="/images/logo_roaya.png" alt="" />
        <span />
      </span>
      <p>جارٍ تحميل الصفحة</p>
    </div>
  );
}
