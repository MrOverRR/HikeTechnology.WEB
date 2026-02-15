import React from 'react';
import { Printer, ChevronLeft, Hash } from 'lucide-react';
import Button from '../../components/ui/Button';

const PrintControls = ({ isPrinting, onTogglePrint, onPrint }) => {
    if (isPrinting) {
        return (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 flex gap-4 no-print z-50">
                <Button
                    variant="ghost"
                    onClick={() => onTogglePrint(false)}
                    className="rounded-full shadow-2xl"
                >
                    <ChevronLeft size={18} /> Volver a Editar
                </Button>
                <Button
                    variant="secondary"
                    onClick={onPrint}
                    className="rounded-full shadow-2xl"
                >
                    <Printer size={18} /> Confirmar e Imprimir
                </Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mb-6 flex flex-wrap gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-xl border border-white/50 no-print">
            <div className="flex items-center gap-3">
                <div className="bg-[#f8b920] p-2 rounded-lg">
                    <Hash className="text-black" size={20} />
                </div>
                <div>
                    <h1 className="text-lg font-black text-slate-800 leading-tight">HIKE TECHNOLOGY</h1>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Sistema de Gestión de Cobros</p>
                </div>
            </div>
            <Button
                variant="primary"
                onClick={() => onTogglePrint(true)}
            >
                <Printer size={18} /> Vista Previa de Impresión
            </Button>
        </div>
    );
};

export default PrintControls;
