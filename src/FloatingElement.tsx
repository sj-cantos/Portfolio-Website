import React from 'react';
import { Code, Database, Globe, Zap, Cpu, Cloud } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { icon: Code, delay: '0s', duration: '20s', x: '10%', y: '20%' },
    { icon: Database, delay: '2s', duration: '25s', x: '80%', y: '30%' },
    { icon: Globe, delay: '4s', duration: '18s', x: '15%', y: '70%' },
    { icon: Zap, delay: '6s', duration: '22s', x: '85%', y: '60%' },
    { icon: Cpu, delay: '8s', duration: '24s', x: '50%', y: '15%' },
    { icon: Cloud, delay: '10s', duration: '26s', x: '70%', y: '80%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((Element, index) => (
        <div
          key={index}
          className="absolute opacity-10 text-blue-400"
          style={{
            left: Element.x,
            top: Element.y,
            animation: `float-random ${Element.duration} infinite linear`,
            animationDelay: Element.delay,
          }}
        >
          <Element.icon size={32} />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;