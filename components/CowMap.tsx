import React from 'react';

interface CowMapProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

// Simplified geometric representation of a cow
// Each path corresponds to a cut in BEEF_CUTS
const CowMap: React.FC<CowMapProps> = ({ selectedId, onSelect }) => {
  const getFill = (id: string) =>
    selectedId === id ? 'fill-red-500' : 'fill-stone-300';

  const baseClass =
    'stroke-white stroke-2 cursor-pointer hover:fill-red-400 transition-colors duration-200';

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[3/2] bg-white rounded-xl shadow-inner border border-stone-200 p-4">
        <h3 className="absolute top-4 left-4 text-xs font-bold text-stone-400 uppercase tracking-widest">Interactive Diagram</h3>
      <svg
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Head (Decorative) */}
        <path d="M50 150 Q50 100 80 80 L120 100 L120 160 Z" className="fill-stone-200" />
        
        {/* Chuck (Shoulder) */}
        <path
          d="M120 100 L220 100 L220 250 L120 220 Z"
          className={`${baseClass} ${getFill('chuck')}`}
          onClick={() => onSelect('chuck')}
        />
        
        {/* Rib */}
        <path
          d="M220 100 L320 100 L320 180 L220 180 Z"
          className={`${baseClass} ${getFill('rib')}`}
          onClick={() => onSelect('rib')}
        />
        
        {/* Short Loin / Sirloin */}
        <path
          d="M320 100 L420 100 L420 180 L320 180 Z"
          className={`${baseClass} ${getFill('short_loin')}`}
          onClick={() => onSelect('short_loin')}
        />
        
         {/* Tenderloin (Conceptual - usually internal, placing near loin) */}
         <path
          d="M320 180 L420 180 L420 200 L320 200 Z"
          className={`${baseClass} ${getFill('tenderloin')}`}
          onClick={() => onSelect('tenderloin')}
        />

        {/* Round (Rump) */}
        <path
          d="M420 100 L550 120 L550 280 L420 250 Z"
          className={`${baseClass} ${getFill('round')}`}
          onClick={() => onSelect('round')}
        />

        {/* Brisket (Chest) */}
        <path
          d="M120 220 L220 250 L220 320 L140 280 Z"
          className={`${baseClass} ${getFill('brisket')}`}
          onClick={() => onSelect('brisket')}
        />

        {/* Plate (Belly) */}
        <path
          d="M220 180 L320 200 L320 300 L220 320 Z"
          className={`${baseClass} ${getFill('plate')}`}
          onClick={() => onSelect('plate')}
        />
        
        {/* Flank (Rear Belly) */}
        <path
          d="M320 200 L420 200 L420 250 L320 300 Z"
          className={`${baseClass} ${getFill('flank')}`}
          onClick={() => onSelect('flank')}
        />

        {/* Front Shank */}
        <path
          d="M140 280 L160 360 L200 360 L220 320 Z"
          className={`${baseClass} ${getFill('shank')}`}
          onClick={() => onSelect('shank')}
        />

         {/* Rear Shank (Part of Round visually, but separate click area for legs) */}
         <path
          d="M480 265 L500 360 L540 360 L550 280 Z"
          className={`${baseClass} ${getFill('shank')}`}
          onClick={() => onSelect('shank')}
        />
        
        {/* Labels Overlay */}
        <text x="170" y="160" className="text-xs font-bold fill-white pointer-events-none text-center">CHUCK</text>
        <text x="270" y="140" className="text-xs font-bold fill-white pointer-events-none text-center">RIB</text>
        <text x="370" y="140" className="text-xs font-bold fill-white pointer-events-none text-center">LOIN</text>
        <text x="480" y="180" className="text-xs font-bold fill-white pointer-events-none text-center">ROUND</text>
        <text x="170" y="270" className="text-xs font-bold fill-white pointer-events-none text-center">BRISKET</text>
        <text x="270" y="250" className="text-xs font-bold fill-white pointer-events-none text-center">PLATE</text>
        <text x="380" y="235" className="text-xs font-bold fill-white pointer-events-none text-center">FLANK</text>
      </svg>
    </div>
  );
};

export default CowMap;