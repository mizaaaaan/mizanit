import { useEffect } from "react";
import { X } from "lucide-react";

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string | null;
  alt?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-modal flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full text-muted hover:bg-elevated hover:text-fg"
        aria-label="Close"
      >
        <X className="size-5" />
      </button>
      <img
        src={src}
        alt={alt ?? ""}
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain outline outline-1 -outline-offset-1 outline-fg/10"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
