import React, { useState } from 'react';
import { BeefCut } from '../types';
import PriceIndicator from './PriceIndicator';
import StatBar from './StatBar';
import { ChefHat, Sparkles, Utensils } from 'lucide-react';
import { generateRecipe } from '../services/geminiService';

interface DetailPanelProps {
  cut: BeefCut | null;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ cut }) => {
  const [recipe, setRecipe] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'recipe'>('details');

  // Reset recipe when cut changes
  React.useEffect(() => {
    setRecipe(null);
    setActiveTab('details');
  }, [cut]);

  const handleGenerateRecipe = async (cuisine: 'Western' | 'Asian') => {
    if (!cut) return;
    setLoading(true);
    setActiveTab('recipe');
    const result = await generateRecipe(cut, cuisine);
    setRecipe(result);
    setLoading(false);
  };

  if (!cut) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-white rounded-xl border border-dashed border-stone-300 p-10 text-stone-400">
        <Utensils size={48} className="mb-4 opacity-50" />
        <p className="text-lg font-medium text-center">Select a part of the cow<br/>to see details.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="bg-stone-900 text-white p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ChefHat size={100} />
        </div>
        <div className="flex justify-between items-start z-10 relative">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-red-50">{cut.nameEn}</h2>
            <h3 className="text-xl font-medium text-red-300 mt-1">{cut.nameCn}</h3>
          </div>
          <div className="bg-stone-800 rounded-lg p-2 shadow-inner">
            <PriceIndicator level={cut.priceLevel} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200">
        <button
          onClick={() => setActiveTab('details')}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            activeTab === 'details' ? 'border-b-2 border-red-600 text-red-600 bg-red-50' : 'text-stone-500 hover:bg-stone-50'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('recipe')}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            activeTab === 'recipe' ? 'border-b-2 border-red-600 text-red-600 bg-red-50' : 'text-stone-500 hover:bg-stone-50'
          }`}
        >
          AI Chef
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 overflow-y-auto">
        {activeTab === 'details' ? (
          <div className="space-y-6">
            
            {/* Description */}
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-100">
              <p className="text-stone-700 mb-2 leading-relaxed">{cut.descriptionEn}</p>
              <p className="text-stone-600 text-sm leading-relaxed font-serif">{cut.descriptionCn}</p>
            </div>

            {/* Stats */}
            <div className="space-y-3">
               <StatBar 
                  label="Tenderness (嫩度)" 
                  value={cut.characteristics.tenderness} 
                  colorClass="bg-rose-400"
               />
               <StatBar 
                  label="Fat Content (油脂)" 
                  value={cut.characteristics.fat} 
                  colorClass="bg-amber-400"
               />
               <StatBar 
                  label="Ease of Cooking (烹饪难度)" 
                  value={cut.characteristics.cookingEase} 
                  colorClass="bg-emerald-400"
               />
            </div>

            {/* Usages */}
            <div>
               <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Best For</h4>
               <div className="flex flex-wrap gap-2">
                 {cut.cookingMethods.map(m => (
                   <span key={m} className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium border border-red-200">
                     {m}
                   </span>
                 ))}
               </div>
            </div>

             {/* Common Dishes */}
             <div>
               <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Common Dishes</h4>
               <ul className="grid grid-cols-2 gap-2">
                 {cut.commonDishes.map(d => (
                   <li key={d} className="flex items-center text-sm text-stone-700">
                     <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-2"></span>
                     {d}
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        ) : (
          <div className="h-full flex flex-col">
            {!recipe && !loading && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <Sparkles size={32} className="text-purple-500" />
                <h3 className="text-lg font-medium text-stone-800">Ask the AI Chef</h3>
                <p className="text-sm text-stone-500 max-w-xs mx-auto">
                  Generate a custom recipe for {cut.nameEn} utilizing Gemini AI.
                </p>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleGenerateRecipe('Asian')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg shadow transition-colors"
                  >
                    Asian Style
                  </button>
                  <button
                    onClick={() => handleGenerateRecipe('Western')}
                    className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white text-sm font-medium rounded-lg shadow transition-colors"
                  >
                    Western Style
                  </button>
                </div>
              </div>
            )}

            {loading && (
               <div className="flex flex-col items-center justify-center h-full space-y-4 animate-pulse">
                 <div className="w-12 h-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
                 <p className="text-sm text-stone-500">Thinking of a delicious recipe...</p>
               </div>
            )}

            {recipe && (
              <div className="h-full flex flex-col">
                 <div className="flex-1 overflow-y-auto pr-2 custom-markdown">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-stone-700 leading-relaxed">
                      {recipe}
                    </pre>
                 </div>
                 <button 
                  onClick={() => setRecipe(null)}
                  className="mt-4 text-xs text-stone-400 hover:text-red-500 underline self-center"
                 >
                   Generate a different one
                 </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPanel;