import React from 'react';
interface GlowingCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  glowColor?: string;
  children?: React.ReactNode;
}
export const GlowingCard: React.FC<GlowingCardProps> = ({
  title,
  description,
  icon,
  className = '',
  glowColor = '#00E0FF',
  children
}) => {
  return <div className={`relative rounded-xl bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-6 overflow-hidden group ${className}`} style={{
    boxShadow: `0 0 30px 1px rgba(0, 224, 255, 0.1)`
  }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-in-out" style={{
      background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`
    }} />
      {icon && <div className="text-[#00E0FF] mb-4 text-2xl">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      {children}
    </div>;
};