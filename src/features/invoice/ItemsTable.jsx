import React from 'react';
import { Trash2, Plus } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ItemsTable = ({ items, onUpdateItem, onRemoveItem, onAddItem, isPrinting }) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full mb-8">
                    <thead>
                        <tr className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-slate-900">
                            <th className="py-4 px-2 text-left">Equipo & Descripción</th>
                            <th className="py-4 px-2 text-left">Servicio ID</th>
                            <th className="py-4 px-2 text-center">Referencia (Barcode)</th>
                            <th className="py-4 px-2 text-right">Valor Neto</th>
                            {!isPrinting && <th className="py-4 px-2 w-10"></th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {items.map((item) => (
                            <tr key={item.id} className="group transition-colors hover:bg-slate-50/50">
                                <td className="py-6 px-2">
                                    <Input
                                        value={item.desc}
                                        onChange={(e) => onUpdateItem(item.id, 'desc', e.target.value)}
                                        className="w-full bg-transparent font-bold text-slate-800 focus:text-black"
                                        placeholder="Descripción del equipo..."
                                        disabled={isPrinting}
                                    />
                                </td>
                                <td className="py-6 px-2">
                                    <Input
                                        value={item.service}
                                        onChange={(e) => onUpdateItem(item.id, 'service', e.target.value)}
                                        className="w-full bg-transparent text-sm font-mono text-slate-500 uppercase"
                                        placeholder="ID SERVICIO"
                                        disabled={isPrinting}
                                    />
                                </td>
                                <td className="py-6 px-2 text-center">
                                    <div className="flex flex-col items-center group-hover:scale-110 transition-transform">
                                        <span className="barcode text-slate-900 leading-none">{item.code || 'KMLI'}</span>
                                        <Input
                                            value={item.code}
                                            onChange={(e) => onUpdateItem(item.id, 'code', e.target.value.toUpperCase())}
                                            className="text-[9px] font-black text-slate-400 mt-1 text-center w-20"
                                            placeholder="CÓDIGO"
                                            disabled={isPrinting}
                                            align="center"
                                        />
                                    </div>
                                </td>
                                <td className="py-6 px-2 text-right">
                                    <div className="flex items-center justify-end font-black text-slate-900 text-lg">
                                        <span className="text-yellow-500 mr-1">$</span>
                                        <Input
                                            type="number"
                                            value={item.price}
                                            onChange={(e) => onUpdateItem(item.id, 'price', e.target.value)}
                                            className="w-28 text-right bg-transparent"
                                            disabled={isPrinting}
                                            align="right"
                                        />
                                    </div>
                                </td>
                                {!isPrinting && (
                                    <td className="py-6 px-2 text-center">
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
                </table>
            </div>

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
