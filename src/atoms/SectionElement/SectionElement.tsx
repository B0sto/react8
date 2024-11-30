import { useState, useRef, useEffect } from 'react';
import Header_Section from '../../interfaces';

const SectionElement = ({ sectionName }: Header_Section) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="sectionElement">
      {isVisible ? (
        <div>
          <p>{sectionName}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SectionElement;
