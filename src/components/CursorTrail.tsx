import { useEffect } from "react";

const CursorTrail: React.FC = () => {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Skip creating trail if hovering over a button
      if (target.tagName === "BUTTON" || target.closest("button")) {
        return;
      }

      const lines = 3;
      const spread = 15;
      const lineWidth = 50;

      for (let i = 0; i < lines; i++) {
        const seg = document.createElement("div");
        seg.className = "cursor-segment";

        const hue = (i * 360) / lines;
        seg.style.background = `hsl(${hue}, 100%, 60%)`;
        seg.style.boxShadow = `0 0 10px hsl(${hue}, 100%, 60%), 0 0 25px hsl(${hue}, 100%, 60%)`;

        const offset = (i - lines / 2) * spread;
        seg.style.width = `${lineWidth}px`;
        seg.style.height = `4px`;
        seg.style.left = `${e.clientX - lineWidth / 2}px`;
        seg.style.top = `${e.clientY + offset}px`;

        document.body.appendChild(seg);
        setTimeout(() => seg.remove(), 1000);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
};

export default CursorTrail;

