import React, { useState } from 'react';
import CowMap from './components/CowMap';
import DetailPanel from './components/DetailPanel';
import AppIcon from './components/AppIcon';
import { BEEF_CUTS } from './constants';
import { BeefCut } from './types';
import { Info, ListFilter } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCutId, setSelectedCutId] = useState<string | null>(null);

  const selectedCut: BeefCut | null = selectedCutId 
    ? BEEF_CUTS.find(c => c.id === selectedCutId) || null 
    : null;

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col font-sans">
      {/* Navigation / Header */}
      <header className="bg-stone-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
             <div className="bg-red-600 p-1.5 rounded-lg shadow-sm">
                <AppIcon className="w-6 h-6 text-white" />
             </div>
             <div>
                <h1 className="text-lg font-bold tracking-wide">BEEFGUIDE</h1>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">Smart Shopper Assistant</p>
             </div>
          </div>
          <div>
            <button className="p-2 hover:bg-stone-800 rounded-full text-stone-400 hover:text-white transition-colors">
              <Info size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Map & List */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Map Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-stone-800">Select a Cut</h2>
                <p className="text-stone-500 text-sm">Tap the diagram or select from the list below to view details.</p>
              </div>
              <CowMap selectedId={selectedCutId} onSelect={setSelectedCutId} />
              
              {/* Quick Legend */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-stone-500">
                <div className="flex items-center"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Selected</div>
                <div className="flex items-center"><span className="w-3 h-3 bg-stone-300 rounded-full mr-2"></span>Available</div>
                <div className="flex items-center"><span className="w-3 h-3 bg-stone-200 rounded-full mr-2"></span>Bone/Fat</div>
              </div>
            </div>

            {/* List Selection Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-stone-700 mb-4 flex items-center">
                <ListFilter size={18} className="mr-2 text-stone-500" />
                Browse by Name
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {BEEF_CUTS.map(cut => (
                  <button
                    key={cut.id}
                    onClick={() => setSelectedCutId(cut.id)}
                    className={`
                      relative p-3 rounded-xl border text-left transition-all duration-200 group
                      ${selectedCutId === cut.id 
                        ? 'bg-red-600 border-red-600 shadow-md transform scale-[1.02]' 
                        : 'bg-white border-stone-200 hover:border-red-300 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className="flex flex-col">
                      <span className={`font-bold text-sm ${selectedCutId === cut.id ? 'text-white' : 'text-stone-800'}`}>
                        {cut.nameEn}
                      </span>
                      <span className={`text-xs mt-0.5 ${selectedCutId === cut.id ? 'text-red-100' : 'text-stone-500'}`}>
                        {cut.nameCn}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Detail Panel */}
          <div className="lg:col-span-5 h-[600px] lg:h-auto lg:sticky lg:top-24">
             <DetailPanel cut={selectedCut} />
          </div>

        </div>
      </main>

      <footer className="bg-stone-200 py-6 mt-12 text-center text-stone-500 text-xs">
        <p>© {new Date().getFullYear()} BeefGuide. Designed for meat lovers.</p>
        <p className="mt-1">Prices are generic estimates.</p>
      </footer>
    </div>
  );
};

export default App;