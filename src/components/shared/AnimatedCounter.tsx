"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Smooth easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentVal = easeProgress * end;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
