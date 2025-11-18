```tsx
// path/to/components/sections/EcosystemSection.tsx
import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const EcosystemSection: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const ecosystemNodes = [
    { id: 1, name: 'HYPER CLOUD', description: t('ecosystem.hyperCloud'), orbit: 'orbit-l1', radius: 160 },
    { id: 2, name: 'HYPER ME', description: t('ecosystem.hyperMe'), orbit: 'orbit-l2', radius: 200 },
    { id: 3, name: 'HYPER LABS', description: t('ecosystem.hyperLabs'), orbit: 'orbit-l3', radius: 240 },
    { id: 4, name: 'HYPER ACADEMY', description: t('ecosystem.hyperAcademy'), orbit: 'orbit-l4', radius: 280 },
    { id: 5, name: 'HYPER AI', description: t('ecosystem.hyperAI'), orbit: 'orbit-l5', radius: 180 },
    { id: 6, name: 'HYPER PARTNERS', description: t('ecosystem.hyperPartners'), orbit: 'orbit-l6', radius: 300 },
    { id: 7, name: 'HYPER VENTURES', description: t('ecosystem.hyperVentures'), orbit: 'orbit-l7', radius: 330 },
    { id: 8, name: 'HYPER SMART HOME', description: t('ecosystem.hyperSmartHome'), orbit: 'orbit-l8', radius: 260 },
    { id: 9, name: 'HYPER LINK', description: t('ecosystem.hyperLink'), orbit: 'orbit-l9', radius: 220 },
    { id: 10, name: 'HYPER TEACH', description: '', orbit: 'orbit-l2', radius: 195 },
    { id: 11, name: 'HYPER SCHOOL', description: '', orbit: 'orbit-l3', radius: 235 },
  ];

  const sizeMap = {
    small: 'w-16 h-16',
    medium: 'w-20 h-20',
    large: 'w-24 h-24'
  };

  return (
    <section id="ecosystem" className="py-20 relative">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .orbit-l1 { animation: spin-slow 20s linear infinite; }
        .orbit-l2 { animation: spin-slow 26s linear infinite; }
        .orbit-l3 { animation: spin-slow 34s linear infinite; }
        .orbit-l4 { animation: spin-slow 42s linear infinite; }
        .orbit-l5 { animation: spin-slow 24s linear infinite; }
        .orbit-l6 { animation: spin-slow 48s linear infinite; }
        .orbit-l7 { animation: spin-slow 56s linear infinite; }
        .orbit-l8 { animation: spin-slow 30s linear infinite; }
        .orbit-l9 { animation: spin-slow 38s linear infinite; }

        .galaxy-bg {
          background: radial-gradient(circle at center, rgba(0,20,40,0.9), rgba(0,0,0,0.95));
        }

        .stars {
          background-image: url('https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001131/GSFC_20171208_Archive_e001131~orig.jpg');
          opacity: 0.28;
          animation: spin-slow 180s linear infinite;
        }

        .ecosystem-node {
          transform: rotate(0deg) !important;
        }
      `}</style>

      <div className="absolute inset-0 galaxy-bg"></div>
      <div className="absolute inset-0 stars bg-cover bg-center"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('ecosystem.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">{t('ecosystem.description')}</p>
        </div>

        <div className="relative h-[650px] md:h-[750px] flex items-center justify-center">
          <div className="absolute w-44 h-44 rounded-full flex items-center justify-center
            bg-[radial-gradient(circle,rgba(0,224,255,0.45),rgba(0,40,80,0.7),rgba(0,0,0,0.85))]
            border border-cyan-400/40 shadow-[0_0_45px_rgba(0,224,255,0.4)]">
            <h3 className="text-center text-white font-extrabold leading-tight">
              HYPER ONE<br />
              <span className="text-[#00E0FF]">CORE AI</span>
            </h3>
          </div>

          {ecosystemNodes.map(node => (
            <div
              key={node.id}
              className={`absolute top-1/2 left-1/2 ${node.orbit}`}
              style={{
                transformOrigin: `0 -${node.radius}px`,
              }}
            >
              <div
                className={`
                  ecosystem-node
                  ${sizeMap.medium}
                  rounded-full flex items-center justify-center
                  transition-all duration-500 cursor-pointer text-center
                `}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  background:
                    hoveredNode === node.id
                      ? 'linear-gradient(135deg, rgba(0,224,255,0.45), rgba(255,209,102,0.35))'
                      : 'rgba(0,224,255,0.12)',
                  border:
                    hoveredNode === node.id
                      ? '1px solid rgba(255,209,102,0.6)'
                      : '1px solid rgba(0,224,255,0.25)',
                  boxShadow:
                    hoveredNode === node.id
                      ? '0 0 35px rgba(0,224,255,0.6)'
                      : '0 0 20px rgba(0,224,255,0.25)',
                }}
              >
                <span className="text-white font-semibold text-xs px-1">
                  {node.name}
                </span>

                {hoveredNode === node.id && node.description && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-48 bg-gray-900/90 border border-gray-700 rounded-lg p-3 text-white text-sm z-20">
                    <h4 className="font-semibold text-[#00E0FF] mb-1">{node.name}</h4>
                    <p className="text-gray-300 text-xs">{node.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```
