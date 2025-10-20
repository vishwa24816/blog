'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from './theme-provider';

const SIZE = 32;
const THICKNESS = 3;
const KNOB_SIZE = 12;

export function ThemeSwitcher() {
  const { hue, setHue } = useTheme();
  const [angle, setAngle] = React.useState((hue / 360) * 360 - 90);
  const switcherRef = React.useRef<HTMLDivElement>(null);

  const handleDrag = (event: MouseEvent | TouchEvent) => {
    if (!switcherRef.current) return;
    const rect = switcherRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    const newAngle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI) + 90;
    const normalizedAngle = (newAngle + 360) % 360;
    
    setAngle(newAngle);
    setHue(normalizedAngle);
  };
  
  const handleInteractionStart = (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    const onMove = (moveEvent: MouseEvent | TouchEvent) => handleDrag(moveEvent);
    const onEnd = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);
  };

  return (
    <div
      ref={switcherRef}
      className="relative flex items-center justify-center cursor-pointer"
      style={{ width: SIZE, height: SIZE }}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
    >
      <motion.div
        className="w-full h-full rounded-full"
        style={{
          background: 'conic-gradient(from 90deg, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(0, 100%, 50%))',
        }}
      />
      <div 
        className="absolute bg-background rounded-full"
        style={{
            width: SIZE - THICKNESS * 2,
            height: SIZE - THICKNESS * 2,
        }}
      />
      <motion.div
        className="absolute flex items-center justify-center"
        style={{
          width: KNOB_SIZE,
          height: KNOB_SIZE,
          top: `calc(50% - ${KNOB_SIZE / 2}px)`,
          left: `calc(50% - ${KNOB_SIZE / 2}px)`,
        }}
        animate={{ rotate: angle }}
      >
        <div 
            className="w-full h-full rounded-full border-2 border-card bg-primary"
            style={{ 
                transform: `translateX(${SIZE/2 - THICKNESS}px)`
            }}
        />
      </motion.div>
    </div>
  );
}
