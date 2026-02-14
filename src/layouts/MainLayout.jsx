import React from 'react';

const MainLayout = ({ children, isPrinting }) => {
    return (
        <div className={`min-h-screen transition-colors duration-500 ${isPrinting ? 'bg-white' : 'bg-slate-100 p-4 md:p-8'}`}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap');
        .barcode { font-family: 'Libre Barcode 39', cursive; font-size: 48px; }
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          .print-container { box-shadow: none !important; border: none !important; width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
        }
      `}</style>

            {children}

            {/* Footer del sistema */}
            {!isPrinting && (
                <div className="max-w-4xl mx-auto mt-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest pb-10">
                    Diseñado para KMLI TECHNOLOGY • Sistema de Gestión de Cobros v2.0
                </div>
            )}
        </div>
    );
};

export default MainLayout;
