import React, { useRef } from 'react';

interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  amberAccent?: boolean;
  disableSheen?: boolean;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  className = '',
  amberAccent = false,
  disableSheen = false,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disableSheen || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardRef.current.style.setProperty('--mouse-x', `${x * 0.4}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y * 0.4}px`);
  };

  const handleMouseLeave = () => {
    if (disableSheen || !cardRef.current) return;
    cardRef.current.style.setProperty('--mouse-x', '0px');
    cardRef.current.style.setProperty('--mouse-y', '0px');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={disableSheen ? undefined : handleMouseMove}
      onMouseLeave={disableSheen ? undefined : handleMouseLeave}
      className={`liquid-glass-card ${amberAccent ? 'liquid-amber-accent' : ''} ${
        disableSheen ? 'static-glass-card' : ''
      } ${className}`}
      {...props}
    >
      {!disableSheen && <div className="liquid-glass-sheen" />}
      {children}
    </div>
  );
};
