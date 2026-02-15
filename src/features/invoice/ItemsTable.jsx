import React from 'react';
import { Trash2, Plus } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ItemsTable = ({ items, onUpdateItem, onRemoveItem, onAddItem, isPrinting }) => {
    return (
        <>
            <div className="overflow-x-auto print:overflow-visible">
                <table className="w-full mb-6 print:mb-3 print:table-fixed">
                    <thead>
                        <tr className="text-slate-800 text-sm font-black uppercase tracking-[0.1em] border-b-2 border-slate-900">
                            <th className="py-4 px-2 w-[10%] text-center">Cantidad</th>
                            <th className="py-4 px-2 w-[25%] text-left">Equipo</th>
                            <th className="py-4 px-2 w-[45%] text-left">Servicio</th>
                            <th className="py-4 px-2 w-[20%] text-right">Valor Unitario</th>
                            {!isPrinting && <th className="py-4 px-2 w-[5%]"></th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {items.map((item) => (
                            <tr key={item.id} className="group transition-colors hover:bg-slate-50/50">
                                <td className="py-6 px-2 align-top">
                                    {isPrinting ? (
                                        <div className="text-center font-bold text-slate-800">{item.quantity}</div>
                                    ) : (
                                        <Input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => onUpdateItem(item.id, 'quantity', e.target.value)}
                                            className="w-full text-center bg-transparent font-bold text-slate-800"
                                            placeholder="0"
                                            disabled={isPrinting}
                                        />
                                    )}
                                </td>
                                <td className="py-6 px-2 align-top">
                                    {isPrinting ? (
                                        <div className="font-bold text-slate-800">{item.desc}</div>
                                    ) : (
                                        <Input
                                            value={item.desc}
                                            onChange={(e) => onUpdateItem(item.id, 'desc', e.target.value)}
                                            className="w-full bg-transparent font-bold text-slate-800 focus:text-black"
                                            placeholder="Nombre del equipo..."
                                            disabled={isPrinting}
                                        />
                                    )}
                                </td>
                                <td className="py-6 px-2 align-top">
                                    {isPrinting ? (
                                        <div className="text-sm font-mono text-slate-500 uppercase whitespace-pre-wrap break-words">{item.service}</div>
                                    ) : (
                                        <textarea
                                            value={item.service}
                                            onChange={(e) => onUpdateItem(item.id, 'service', e.target.value)}
                                            className="w-full bg-transparent text-sm font-mono text-slate-500 uppercase resize-none overflow-hidden focus:bg-white focus:ring-2 focus:ring-indigo-100 rounded-md p-1 transition-all"
                                            placeholder="CÓDIGOS DE SERVICIO..."
                                            disabled={isPrinting}
                                            rows={1}
                                            onInput={(e) => {
                                                e.target.style.height = 'auto';
                                                e.target.style.height = e.target.scrollHeight + 'px';
                                            }}
                                        />
                                    )}
                                </td>
                                <td className="py-6 px-2 text-right align-top">
                                    <div className="flex items-center justify-end font-black text-slate-900 text-lg">
                                        <span className="text-[#f8b920] mr-1">$</span>
                                        {isPrinting ? (
                                            <span>{item.unitValue}</span>
                                        ) : (
                                            <Input
                                                type="number"
                                                value={item.unitValue}
                                                onChange={(e) => onUpdateItem(item.id, 'unitValue', e.target.value)}
                                                className="w-28 text-right bg-transparent"
                                                disabled={isPrinting}
                                                align="right"
                                            />
                                        )}
                                    </div>
                                </td>
                                {!isPrinting && (
                                    <td className="py-6 px-2 text-center align-top">
                                        <Button
                                            variant="danger"
                                            size="icon"
                                            onClick={() => onRemoveItem(item.id)}
                                            className="opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 size={18} />
                                        </Button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table >
            </div >

            {!isPrinting && (
                <Button
                    variant="dashed"
                    size="full"
                    onClick={onAddItem}
                    className="mb-12"
                >
                    <Plus size={16} /> Agregar nuevo registro
                </Button>
            )}
        </>
    );
};

export default ItemsTable;
