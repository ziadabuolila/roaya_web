"use client";
import { useEffect, useState } from "react";
export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (showLoader) {
      root.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return () => {
        root.style.overflow = "";
        document.body.style.overflow = "";
      };
    }
    root.style.overflow = "";
    document.body.style.overflow = "";
  }, [showLoader]);

  if (!showLoader) return null;

  return (
    <div className={`loader-overlay ${animationComplete ? "fade-out" : ""}`}>
      <div className="loader-content">
        <div className="loader-circle">
          <svg className="loader-svg" viewBox="0 0 100 100">
            <circle
              className="loader-circle-bg"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.2"
            />
            <circle
              className="loader-circle-progress"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className={`loader-logo ${animationComplete ? "hide" : ""}`}>
            <img
              src="/images/logo_roaya.png"
              alt="رؤية باي"
              className="loader-logo-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
