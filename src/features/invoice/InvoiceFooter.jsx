import React from 'react';

const RETENCION_UMBRAL = 4788000;

const InvoiceFooter = ({ total = 0 }) => {
    const mostrarPuntoRetencion = total < RETENCION_UMBRAL;

    return (
        <div className="mt-6 print:mt-4 pt-6 print:pt-3 border-t border-slate-100 break-inside-avoid page-break-inside-avoid">
            {/* 1. Términos y condiciones (debajo del total) */}
            <div className="text-center space-y-2 print:space-y-1 max-w-2xl mx-auto px-4 print:px-0 mb-1 print:mb-0">
                <h4 className="text-[10px] print:text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Términos y Condiciones</h4>
                <div className="text-[9px] print:text-[8px] text-slate-400 uppercase leading-relaxed flex flex-col gap-1 text-left">
                    <p className="font-semibold text-slate-500">Para su causación y pago declaro que:</p>
                    <p>1. Responsabilidad de IVA: No soy responsable de IVA, por tanto, no estoy obligado a cobrar el Impuesto sobre las Ventas (Art. 437 del E.T.).</p>
                    <p>2. Facturación: No estoy obligado a expedir factura de venta según el artículo 616-2 del Estatuto Tributario y el Artículo 1.6.1.4.3 del Decreto 1625 de 2016.</p>
                    <p>3. Documentos: Anexo copia del Registro Único Tributario - RUT.</p>
                    {mostrarPuntoRetencion && (
                        <>
                            <p>4. Retención en la Fuente: Para efectos de lo dispuesto en el Artículo 383 del Estatuto Tributario, manifiesto bajo la gravedad de juramento que:</p>
                            <p className="pl-3">· No he contratado o vinculado a dos (2) o más trabajadores asociados a mi actividad por un término igual o superior a noventa (90) días continuos o discontinuos dentro de la misma vigencia fiscal.</p>
                            <p className="pl-3">· Mis ingresos no provienen de rentas de capital ni de dividendos y participaciones.</p>
                            <p className="pl-3">· Por lo tanto, solicito la aplicación de la tabla de retención del Art. 383, la cual es del 0% al no superar el rango mínimo de 95 UVT.</p>
                        </>
                    )}
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
