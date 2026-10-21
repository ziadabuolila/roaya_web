"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface TeamMemberImageProps {
  src: string;
  alt: string;
}

export default function TeamMemberImage({ src, alt }: TeamMemberImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="member-image-wrapper member-image-trigger"
        onClick={() => setIsOpen(true)}
        aria-label={`تكبير صورة ${alt}`}
      >
        <img src={src} alt={alt} className="member-image" />
      </button>

      {isOpen &&
        createPortal(
          <div
            className="team-image-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`صورة ${alt}`}
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              className="team-image-lightbox-close"
              onClick={() => setIsOpen(false)}
              aria-label="إغلاق الصورة"
              autoFocus
            >
              <X size={23} />
            </button>
            <img
              src={src}
              alt={alt}
              className="team-image-lightbox-image"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
