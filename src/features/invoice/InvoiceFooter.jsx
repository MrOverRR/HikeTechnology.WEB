import React from 'react';



const InvoiceFooter = ({ total = 0 }) => {


    return (
        <div className="mt-6 print:mt-4 pt-6 print:pt-3 border-t border-slate-100 break-inside-avoid page-break-inside-avoid">
            {/* 1. Términos y condiciones (debajo del total) */}
            <div className="text-center space-y-2 print:space-y-1 max-w-2xl mx-auto px-4 print:px-0 mb-1 print:mb-0">
                <div className="text-[9px] print:text-[8px] text-slate-400 uppercase leading-relaxed flex flex-col gap-1 text-left">
                    <p className="font-semibold text-slate-500">Para su causación y pago declaro que:</p>
                    <p>1. Responsabilidad de IVA: No soy responsable de IVA, por tanto, no estoy obligado a cobrar el Impuesto sobre las Ventas (Art. 437 del E.T.).</p>
                    <p>2. Facturación: No estoy obligado a expedir factura de venta según el artículo 616-2 del Estatuto Tributario y el Artículo 1.6.1.4.3 del Decreto 1625 de 2016.</p>
                    <p>3. Documentos: Anexo copia del Registro Único Tributario - RUT.</p>

                </div>
            </div>

            {/* 2. Firma al final, centrada con imagen superpuesta a la línea */}
            <div className="flex justify-center items-center">
                <div className="firma-container">
                    <img
                        src="/Firma-bg.png"
                        alt="Firma autorizada"
                        className="firma-imagen"
                    />
                    <div className="firma-linea" />
                    <div className="space-y-1">
                        <p className="firma-texto text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 leading-none">Firma Autorizada</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceFooter;
