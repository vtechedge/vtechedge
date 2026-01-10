import { useEffect } from 'react';

/**
 * Custom hook to add scroll animations to elements
 * Usage: const ref = useScrollAnimation('fade-in-up');
 */
export const useScrollAnimation = (animationClass = 'fade-in-up', threshold = 0.1) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(animationClass);
                        // Optionally unobserve after animation
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold,
                rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
            }
        );

        // Observe all elements with data-animate attribute
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [animationClass, threshold]);
};

/**
 * Scroll to top function with smooth behavior
 */
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

/**
 * Scroll to element by ID with offset
 */
export const scrollToElement = (elementId, offset = 100) => {
    const element = document.getElementById(elementId);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    }
};
