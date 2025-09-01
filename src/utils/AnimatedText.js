import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, staggerDuration = 0.05 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx;
    let split;

    const loadSplitText = async () => {
      const { SplitText } = await import("gsap/SplitText");
      gsap.registerPlugin(SplitText);

      // Split into chars, two levels: outer + inner
      split = new SplitText(textRef.current, { type: "chars" });

      // Give outer spans hidden overflow
      split.chars.forEach((char) => {
        char.parentNode.style.overflow = "hidden";
        char.parentNode.style.display = "inline-block";
        char.parentNode.style.lineHeight = "0.9em";
        char.parentNode.style.paddingBottom = "0.2em";
      });

      ctx = gsap.context(() => {
        gsap.from(split.chars, {
          yPercent: 100, // animate letter from below
          opacity: 0,
          stagger: staggerDuration,
          ease: "power2.out",
          duration: 0.7,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        });
      });
    };

    loadSplitText();

    return () => {
      if (split) split.revert();
      if (ctx) ctx.revert();
    };
  }, [staggerDuration]);

  return <div ref={textRef}>{text}</div>;
};

export default AnimatedText;
