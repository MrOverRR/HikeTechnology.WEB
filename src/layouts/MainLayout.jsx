import React from 'react';
import LiquidEther from '../components/backgrounds/LiquidEther';

const MainLayout = ({ children, isPrinting }) => {
    return (
        <div className={`min-h-screen transition-colors duration-500 relative scroll-smooth ${isPrinting ? 'bg-white' : ''} ${!isPrinting ? 'p-4 md:p-8' : ''}`}>
            {/* Background LiquidEther */}
            {!isPrinting && (
                <div className="fixed inset-0 z-0">
                    <LiquidEther
                        colors={['#05040b', '#fde912', '#ffffff']}
                        mouseForce={20}
                        cursorSize={100}
                        isViscous={true}
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.5}
                        isBounce={false}
                        autoDemo={true}
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                    />
                </div>
            )}

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap');
        .barcode { font-family: 'Libre Barcode 39', cursive; font-size: 48px; }
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          .print-container { box-shadow: none !important; border: none !important; width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
        }
      `}</style>

            {/* Content Container */}
            <div className="relative z-10">
                {children}

                {/* Footer del sistema */}
                {!isPrinting && (
                    <div className="max-w-4xl mx-auto mt-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest pb-10">
                        Diseñado para HIKE TECHNOLOGY • Sistema de Gestión de Cobros v2.0
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainLayout;
