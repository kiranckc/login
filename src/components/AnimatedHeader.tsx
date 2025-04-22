import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const AnimatedHeader: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    
    const letters = headerRef.current.textContent?.split('') || [];
    headerRef.current.textContent = '';
    
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.1}s`;
      span.className = 'inline-block animate-pulse-glow transition-all duration-300';
      headerRef.current?.appendChild(span);
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef.current) return;
      
      const spans = headerRef.current.querySelectorAll('span');
      const rect = headerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      spans.forEach((span, index) => {
        const spanRect = span.getBoundingClientRect();
        const spanCenterX = spanRect.left + spanRect.width / 2;
        const spanCenterY = spanRect.top + spanRect.height / 2;
        
        const distanceFromMouse = Math.sqrt(
          Math.pow(mouseX - spanCenterX, 2) + 
          Math.pow(mouseY - spanCenterY, 2)
        );
        
        const normalizedDistance = Math.min(distanceFromMouse / maxDistance, 1);
        const intensity = 1 - normalizedDistance;
        
        span.style.transform = `scale(${1 + intensity * 0.3})`;
        span.style.color = `hsl(${280 + index * 5}, ${100}%, ${50 + intensity * 30}%)`;
        span.style.textShadow = `0 0 ${5 + intensity * 8}px rgba(157, 78, 221, ${intensity * 0.8})`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mb-8">
      <h1 
        ref={headerRef}
        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
      >
        RECKIRAN
      </h1>
      <div className="flex items-center mt-2 text-purple-300 opacity-70">
        <Sparkles className="w-4 h-4 mr-1" />
        <span className="text-sm">Anime Portal</span>
        <Sparkles className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
};

export default AnimatedHeader;