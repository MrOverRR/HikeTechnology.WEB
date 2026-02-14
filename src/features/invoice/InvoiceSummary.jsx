import React from 'react';
import Input from '../../components/ui/Input';
import { formatCurrency } from '../../utils/format';

const InvoiceSummary = ({ subtotal, discountName, discountPercent, discountAmount, total, onUpdate, isPrinting }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-16 pt-8 border-t border-slate-100">
            <div className="flex-1 space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Términos y Condiciones</h4>
                <div className="text-[10px] text-slate-400 uppercase leading-relaxed italic max-w-sm">
                    <p>1. Esta cuenta de cobro se asimila en sus efectos a la factura de venta según el Art. 774 del código de comercio.</p>
                    <p className="mt-2">2. Favor consignar únicamente en las cuentas autorizadas a nombre de KMLI TECHNOLOGY.</p>
                    <p className="mt-2">3. El equipo suministrado cuenta con garantía limitada de 6 meses por defectos de fábrica.</p>
                </div>
            </div>

            <div className="w-full md:w-80 space-y-4">
                <div className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-widest px-4">
                    <span>Subtotal Neto</span>
                    <span className="text-slate-800">{formatCurrency(subtotal)}</span>
                </div>

                <div className="flex justify-between items-center bg-red-50 p-4 rounded-2xl border border-red-100">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-red-700 uppercase tracking-tighter">
                            {discountName}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                            {!isPrinting ? (
                                <Input
                                    type="number"
                                    value={discountPercent}
                                    onChange={(e) => onUpdate('discountPercent', e.target.value)}
                                    className="w-10 text-xs bg-white border border-red-200 rounded-lg px-2 py-1 text-red-700 font-bold"
                                />
                            ) : (
                                <span className="text-xs text-red-700 font-bold">{discountPercent}</span>
                            )}
                            <span className="text-[10px] font-bold text-red-700">% aplicado</span>
                        </div>
                    </div>
                    <span className="font-black text-red-700">-{formatCurrency(discountAmount)}</span>
                </div>

                <div className="flex justify-between items-center bg-slate-900 text-white p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150"></div>
                    <div className="z-10">
                        <p className="text-[9px] font-black text-yellow-400 uppercase tracking-[0.3em] mb-1">Total a Pagar</p>
                        <span className="text-3xl font-black">{formatCurrency(total)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceSummary;
