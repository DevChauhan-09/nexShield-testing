import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger smooth, subtle entrance animations once an element enters the viewport.
 * Uses IntersectionObserver and strictly unobserves upon reveal (runs only once).
 *
 * @param {Object} options IntersectionObserver options
 * @returns {React.RefObject} Ref to attach to the animated DOM element
 */
export function useScrollReveal(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      el.classList.add('is-revealed');
      return;
    }

    // Default configuration: generous threshold and comfortable margin so it feels natural
    const observerOptions = {
      threshold: options.threshold ?? 0.15,
      rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      ...options,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Trigger only once: stop observing immediately
        observer.unobserve(entry.target);
      }
    }, observerOptions);

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options]);

  return elementRef;
}

export default useScrollReveal;
