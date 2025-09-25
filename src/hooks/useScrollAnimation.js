import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollElements = document.querySelectorAll('.fade-in');
    
    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
      element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return scrollY;
};

export default useScrollAnimation;
