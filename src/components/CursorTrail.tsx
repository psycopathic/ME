import { useEffect } from "react";

const CursorTrail: React.FC = () => {
  useEffect(() => {
    let lastX: number | null = null;
    let lastY: number | null = null;

    const handleMove = (e: MouseEvent) => {
      if (lastX === null || lastY === null) {
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const length = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      const lines = 6;
      const spread = 5;

      for (let i = 0; i < lines; i++) {
        const seg = document.createElement("div");
        seg.className = "cursor-segment";

        const hue = (i * 360) / lines;
        seg.style.background = `hsl(${hue}, 100%, 60%)`;
        seg.style.boxShadow = `0 0 10px hsl(${hue}, 100%, 60%), 0 0 25px hsl(${hue}, 100%, 60%)`;

        const offset = (i - lines / 2) * spread;
        seg.style.width = `${length}px`;
        seg.style.left = `${lastX + offset}px`;
        seg.style.top = `${lastY + offset}px`;
        seg.style.transform = `rotate(${angle}deg)`;

        document.body.appendChild(seg);
        setTimeout(() => seg.remove(), 1000);
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
};

export default CursorTrail;
