import { useEffect, useRef, useState, type ReactNode, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  delay?: 0 | 1 | 2;
  className?: string;
  as?: "div" | "li" | "article" | "section" | "header" | "button";
};

export default function Reveal({ children, delay = 0, className, as = "div", ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "visible", delay === 1 && "delay-1", delay === 2 && "delay-2", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
