import React from 'react';
import { Trash2, Plus } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ItemsTable = ({ items, onUpdateItem, onRemoveItem, onAddItem, isPrinting }) => {
    return (
        <>
            <div className="overflow-visible">
                <table className="w-full mb-6 print:mb-3 print:table-fixed border border-slate-200 border-collapse">
                    <thead>
                        <tr className="text-slate-800 text-sm font-black uppercase tracking-[0.1em] border-b-2 border-slate-900">
                            <th className="py-4 px-2 w-[10%] text-center border border-slate-200">Cantidad</th>
                            <th className="py-4 px-2 w-[25%] text-center border border-slate-200">Equipo</th>
                            <th className="py-4 px-2 w-[45%] text-center border border-slate-200">Servicio</th>
                            <th className="py-4 px-2 w-[20%] text-center border border-slate-200">Valor Unitario</th>
                            {!isPrinting && <th className="py-4 px-2 w-[5%] border border-slate-200"></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className="group transition-colors hover:bg-slate-50/50">
                                <td className="py-6 px-2 align-middle border border-slate-200 text-center">
                                    {isPrinting ? (
                                        <div className="text-center font-bold text-slate-800">{item.quantity}</div>
                                    ) : (
                                        <Input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => onUpdateItem(item.id, 'quantity', e.target.value)}
                                            align="center"
                                            className="w-full text-center bg-transparent font-bold text-slate-800"
                                            placeholder="0"
                                            disabled={isPrinting}
                                        />
                                    )}
                                </td>
                                <td className="py-6 px-2 align-middle border border-slate-200 text-center">
                                    {isPrinting ? (
                                        <div className="text-center font-bold text-slate-800">{item.desc}</div>
                                    ) : (
                                        <Input
                                            value={item.desc}
                                            onChange={(e) => onUpdateItem(item.id, 'desc', e.target.value)}
                                            align="center"
                                            className="w-full text-center bg-transparent font-bold text-slate-800 focus:text-black"
                                            placeholder="Nombre del equipo..."
                                            disabled={isPrinting}
                                        />
                                    )}
                                </td>
                                <td className="py-6 px-2 align-middle border border-slate-200 text-center">
                                    {isPrinting ? (
                                        <div className="text-center text-sm font-mono text-slate-500 uppercase whitespace-pre-wrap break-words">{item.service}</div>
                                    ) : (
                                        <textarea
                                            value={item.service}
                                            onChange={(e) => onUpdateItem(item.id, 'service', e.target.value)}
                                            className="w-full text-center bg-transparent text-sm font-mono text-slate-500 uppercase resize-none overflow-hidden focus:bg-white focus:ring-2 focus:ring-indigo-100 rounded-md p-1 transition-all"
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
                                <td className="py-6 px-2 align-middle border border-slate-200 text-center">
                                    <div className="flex items-center justify-center font-black text-slate-900 text-lg">
                                        <span className="text-[#f8b920] mr-1">$</span>
                                        {isPrinting ? (
                                            <span>{item.unitValue}</span>
                                        ) : (
                                            <Input
                                                type="number"
                                                value={item.unitValue}
                                                onChange={(e) => onUpdateItem(item.id, 'unitValue', e.target.value)}
                                                align="center"
                                                className="w-28 text-center bg-transparent"
                                                disabled={isPrinting}
                                            />
                                        )}
                                    </div>
                                </td>
                                {!isPrinting && (
                                    <td className="py-6 px-2 text-center align-middle border border-slate-200">
                                        <div className="flex items-center justify-center">
                                            <Button
                                                variant="danger"
                                                size="icon"
                                                onClick={() => onRemoveItem(item.id)}
                                                className="opacity-0 group-hover:opacity-100"
                                            >
                                                <Trash2 size={18} />
                                            </Button>
                                        </div>
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
