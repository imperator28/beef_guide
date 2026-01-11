import React from 'react';
import { DollarSign } from 'lucide-react';

interface PriceIndicatorProps {
  level: number;
}

const PriceIndicator: React.FC<PriceIndicatorProps> = ({ level }) => {
  return (
    <div className="flex items-center space-x-1" title={`Price Level: ${level}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <DollarSign
          key={i}
          size={16}
          className={`${
            i <= level ? 'text-green-600 fill-green-600' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default PriceIndicator;