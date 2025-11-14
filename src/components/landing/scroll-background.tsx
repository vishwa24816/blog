'use client';

import { useEffect, useRef, useState } from 'react';

type Section = {
  id: string;
  color: string;
};

type ScrollBackgroundProps = {
  children: React.ReactNode;
  sections: Section[];
};

export function ScrollBackground({ children, sections }: ScrollBackgroundProps) {
  const [activeColor, setActiveColor] = useState(sections[0]?.color || '#ffffff');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set the initial background color
    document.body.style.backgroundColor = activeColor;
  }, [activeColor]);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const section = sections.find((s) => s.id === sectionId);
          if (section) {
            setActiveColor(section.color);
          }
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    const currentObserver = observer.current;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          currentObserver.unobserve(element);
        }
      });
    };
  }, [sections]);

  useEffect(() => {
    document.body.style.transition = 'background-color 1s ease';
    return () => {
      document.body.style.transition = '';
    };
  }, []);

  return <>{children}</>;
}
