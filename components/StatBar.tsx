import React from 'react';

interface StatBarProps {
  label: string;
  value: number; // 1-5
  colorClass: string;
}

const StatBar: React.FC<StatBarProps> = ({ label, value, colorClass }) => {
  return (
    <div className="flex flex-col w-full text-sm">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-stone-600">{label}</span>
        <span className="text-stone-500">{value}/5</span>
      </div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClass} transition-all duration-500 ease-out`}
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default StatBar;