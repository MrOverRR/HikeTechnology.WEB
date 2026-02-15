import React from 'react';
import Input from '../../components/ui/Input';
import { formatCurrency } from '../../utils/format';

const InvoiceSummary = ({ subtotal, discountName, discountPercent, discountAmount, total, onUpdate, isPrinting, isDiscountEnabled }) => {
    return (
        <div className="w-full md:w-80 print:w-56 flex-shrink-0 space-y-3 print:space-y-2 break-inside-avoid page-break-inside-avoid">
                <div className="flex justify-between text-xs print:text-[10px] font-black text-slate-400 uppercase tracking-widest px-0">
                    <span>Subtotal Neto</span>
                    <span className="text-slate-800">{formatCurrency(subtotal)}</span>
                </div>

                {(isDiscountEnabled || !isPrinting) && (
                    <div className={`flex justify-between items-center p-3 print:p-2 rounded-2xl print:rounded-xl border transition-colors ${isDiscountEnabled ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'}`}>
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

                <div className="flex flex-col justify-center bg-slate-900 text-white p-4 print:p-2 rounded-2xl print:rounded-xl shadow-lg relative overflow-hidden group w-full">
                    <p className="text-[9px] print:text-[8px] font-black text-[#f8b920] uppercase tracking-wider mb-0.5">Total a Pagar</p>
                    <span className="text-2xl print:text-lg font-black">{formatCurrency(total)}</span>
                </div>
        </div>
    );
};

export default InvoiceSummary;
