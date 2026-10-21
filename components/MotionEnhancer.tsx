/** Show document reading progress without mutating server-rendered page content. */
export default function MotionEnhancer() {
  return (
    <div className="reading-progress" aria-hidden="true">
      <span />
    </div>
  );
}
