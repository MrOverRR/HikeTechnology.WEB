import React from 'react';
import { CreditCard } from 'lucide-react';

const InvoiceFooter = () => {
    return (
        <div className="mt-24 pt-12 border-t border-slate-100">
            <div className="flex flex-col md:flex-row print:flex-row justify-around items-end gap-12 mb-16">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-400">
                        <CreditCard size={14} />
                        <h4 className="text-[10px] font-black uppercase tracking-widest">Información de Pago</h4>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 min-w-[300px]">
                        <p className="text-xs font-black text-slate-800 uppercase italic mb-2">Bancolombia - Ahorros</p>
                        <p className="text-2xl font-mono font-bold text-slate-700 tracking-tighter">No. 000-000000-00</p>
                        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase">Titular: HIKE TECHNOLOGY</p>
                    </div>
                </div>

                <div className="text-center w-full md:w-64">
                    <div className="w-full h-0.5 bg-slate-900 mb-4 opacity-20"></div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 leading-none">Firma Autorizada</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">HIKE TECHNOLOGY S.A.S</p>
                    </div>
                </div>
            </div>

            <div className="text-center space-y-4 max-w-2xl mx-auto px-8">
                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Términos y Condiciones</h4>
                <div className="text-[9px] text-slate-400 uppercase leading-relaxed italic flex flex-col gap-1">
                    <p>1. Esta cuenta de cobro se asimila en sus efectos a la factura de venta según el Art. 774 del código de comercio.</p>
                    <p>2. Favor consignar únicamente en las cuentas autorizadas a nombre de HIKE TECHNOLOGY.</p>
                    <p>3. El equipo suministrado cuenta con garantía limitada de 6 meses por defectos de fábrica.</p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceFooter;
