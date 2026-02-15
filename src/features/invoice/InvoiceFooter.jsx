import React from 'react';

const InvoiceFooter = () => {
    return (
        <div className="mt-6 print:mt-4 pt-6 print:pt-3 border-t border-slate-100 break-inside-avoid page-break-inside-avoid">
            <div className="flex flex-col md:flex-row print:flex-row justify-center items-center gap-8 print:gap-6 mb-8 print:mb-4">
                <div className="text-center w-full md:w-64">
                    <div className="w-full h-0.5 bg-slate-900 mb-4 opacity-20"></div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 leading-none">Firma Autorizada</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">HIKE TECHNOLOGY S.A.S</p>
                    </div>
                </div>
            </div>

            <div className="text-center space-y-2 print:space-y-1 max-w-2xl mx-auto px-4 print:px-0">
                <h4 className="text-[10px] print:text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Términos y Condiciones</h4>
                <div className="text-[9px] print:text-[8px] text-slate-400 uppercase leading-relaxed italic flex flex-col gap-0.5">
                    <p>1. Esta cuenta de cobro se asimila en sus efectos a la factura de venta según el Art. 774 del código de comercio.</p>
                    <p>2. Favor consignar únicamente en las cuentas autorizadas a nombre de HIKE TECHNOLOGY.</p>
                    <p>3. El equipo suministrado cuenta con garantía limitada de 6 meses por defectos de fábrica.</p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceFooter;
