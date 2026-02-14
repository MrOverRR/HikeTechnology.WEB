import React from 'react';
import Input from '../../components/ui/Input';
import { formatCurrency } from '../../utils/format';

const InvoiceSummary = ({ subtotal, discountName, discountPercent, discountAmount, total, onUpdate, isPrinting, isDiscountEnabled }) => {
    return (

        <div className="flex justify-end mt-16 pt-8 border-t border-slate-100">

            <div className="w-full md:w-80 space-y-4">
                <div className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-widest px-4">
                    <span>Subtotal Neto</span>
                    <span className="text-slate-800">{formatCurrency(subtotal)}</span>
                </div>

                {(isDiscountEnabled || !isPrinting) && (
                    <div className={`flex justify-between items-center p-4 rounded-2xl border transition-colors ${isDiscountEnabled ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'}`}>
                        <div className="flex items-center gap-3">
                            {!isPrinting && (
                                <div className="pt-1">
                                    <input
                                        type="checkbox"
                                        checked={isDiscountEnabled}
                                        onChange={(e) => onUpdate('isDiscountEnabled', e.target.checked)}
                                        className="w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-500 cursor-pointer"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col">
                                <span className={`text-[10px] font-black uppercase tracking-tighter ${isDiscountEnabled ? 'text-red-700' : 'text-slate-400'}`}>
                                    {isDiscountEnabled ? discountName : "¿Aplica descuento?"}
                                </span>
                                {isDiscountEnabled && (
                                    <div className="flex items-center gap-2 mt-1">
                                        {!isPrinting ? (
                                            <Input
                                                type="number"
                                                value={discountPercent}
                                                onChange={(e) => onUpdate('discountPercent', e.target.value)}
                                                className="w-12 text-xs border rounded-lg px-2 py-1 font-bold transition-colors bg-white border-red-200 text-red-700"
                                            />
                                        ) : (
                                            <span className="text-xs text-red-700 font-bold">{discountPercent}</span>
                                        )}
                                        <span className="text-[10px] font-bold text-red-700">% aplicado</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        {isDiscountEnabled && (
                            <span className="font-black text-red-700">-{formatCurrency(discountAmount)}</span>
                        )}
                    </div>
                )}

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
