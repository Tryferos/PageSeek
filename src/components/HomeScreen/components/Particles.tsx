'use client';

import {getRandomBrightColor} from '@/constants/colors';
import {useDimensions} from '@/hooks/useDimensions';
import {useEffect, useRef, useState} from 'react';

const padding = 24;

export const Particles = () => {
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const addRef = (ref: HTMLDivElement) => {
    particlesRef.current.push(ref);
  };

  useEffect(() => {
    particlesRef.current.forEach((ref, i) => {
      //* Set Initial Position
      if (ref) {
        const startX = Math.random() * (window.innerWidth - padding * 2);
        const startY = Math.random() * (window.innerHeight * 0.7);
        ref.dataset.x = `${startX}`;
        ref.dataset.y = `${startY}`;

        //* Set Direction
        const speed = 0.75;
        ref.dataset.dx = `${(Math.random() - 0.5) * speed}`;
        ref.dataset.dy = `${(Math.random() - 0.5) * speed}`;

        ref.style.transform = `translate(${startX}px, ${startY}px)`;
        ref.style.backgroundColor = getRandomBrightColor();
        const size = Math.random() * 2 + 1 + 0.001 * window.innerWidth;
        ref.style.width = `${size}px`;
        ref.style.height = `${size}px`;
      }
    });
    animateParticles();
  }, [isAnimating]);

  const animateParticles = () => {
    particlesRef.current.forEach((ref, i) => {
      if (ref) {
        //* Get Stored Values
        const currentX = parseFloat(ref.dataset.x ?? '0');
        const currentY = parseFloat(ref.dataset.y ?? '0');
        const dx = parseFloat(ref.dataset.dx ?? '0');
        const dy = parseFloat(ref.dataset.dy ?? '0');

        let newX = currentX + dx;
        let newY = currentY + dy;

        //* Set Limits
        const widthLimit = {
          start: padding,
          end: window.innerWidth - ref.offsetWidth - padding * 2,
        };
        const heightLimit = {
          start: padding,
          end: window.innerHeight * 0.8 - ref.offsetHeight,
        };

        //* Check if out of bounds
        if (newX <= widthLimit.start || newX >= widthLimit.end) {
          ref.dataset.dx = `${-dx}`;
          newX = currentX;
        }
        if (newY <= heightLimit.start || newY >= heightLimit.end) {
          ref.dataset.dy = `${-dy}`;
          newY = currentY;
        }

        ref.dataset.x = `${newX}`;
        ref.dataset.y = `${newY}`;

        ref.style.transform = `translate(${newX}px, ${newY}px)`;
      }
    });
    requestAnimationFrame(animateParticles);
  };

  return (
    <aside className="w-full h-full absolute left-0 top-0 overflow-hidden tablet:[&:nth-child(n+15)]:*:hidden z-[-1] small:[&:nth-child(n+25)]:*:hidden mobile:[&:nth-child(n+35)]:*:hidden pointer-events-none">
      {new Array(40).fill(0).map((_, i) => (
        <div
          ref={addRef}
          key={i}
          className="absolute rounded-full bg-gray-300 opacity-40"></div>
      ))}
    </aside>
  );
};
