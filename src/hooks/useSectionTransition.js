import { useEffect, useRef, useState } from 'react';

/**
 * Reversible, scroll-driven section transition hook.
 * Uses IntersectionObserver to detect when a section enters or leaves the viewport,
 * triggering smooth entrance animations on scroll-down and gracefully resetting
 * on scroll-away so the animation naturally replays when scrolling back up.
 *
 * @param {Object} options Configuration options
 * @param {number} options.threshold Viewport visibility threshold (default: 0.12)
 * @param {string} options.rootMargin Root margin for viewport detection
 * @returns {[React.RefObject, boolean]} Ref to attach and boolean indicating active view state
 */
export function useSectionTransition(options = {}) {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Accessibility check: user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsInView(true);
      if (elementRef.current) {
        elementRef.current.classList.add('is-in-view');
      }
      return;
    }

    const el = elementRef.current;
    if (!el) return;

    const threshold = options.threshold ?? 0.12;
    const rootMargin = options.rootMargin ?? '0px 0px -60px 0px';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          entry.target.classList.add('is-in-view');
        } else {
          // Reversible: reset when scrolled out of view so it replays smoothly when scrolling back
          setIsInView(false);
          entry.target.classList.remove('is-in-view');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isInView];
}

export default useSectionTransition;
