import { useEffect, useRef, useState } from "react";

/**
 * Anime `text` comme s'il était tapé au clavier, caractère par caractère,
 * avec un curseur clignotant à la fin.
 *
 * - `speed`      : délai (ms) entre deux caractères
 * - `startDelay` : délai (ms) avant que l'animation démarre
 *
 * Respecte la préférence système "réduire les animations"
 * (prefers-reduced-motion) : le texte s'affiche alors directement, sans
 * animation.
 */
function Typewriter({ text, speed = 90, startDelay = 300, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion.current) {
      setDisplayed(text);
      return;
    }

    setDisplayed("");
    let index = 0;
    let tickId;

    const tick = () => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index < text.length) {
        tickId = setTimeout(tick, speed);
      }
    };

    const startId = setTimeout(tick, startDelay);

    return () => {
      clearTimeout(startId);
      clearTimeout(tickId);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={`typewriter ${className}`} aria-label={text}>
      <span aria-hidden="true">
        {displayed}
        <span className="typewriter__cursor" />
      </span>
    </span>
  );
}

export default Typewriter;
