import React from 'react';
import MainLayout from './layouts/MainLayout';
import { useInvoice } from './hooks/useInvoice';
import PrintControls from './features/invoice/PrintControls';
import InvoiceHeader from './features/invoice/InvoiceHeader';
import ClientInfo from './features/invoice/ClientInfo';
import ItemsTable from './features/invoice/ItemsTable';
import InvoiceSummary from './features/invoice/InvoiceSummary';
import InvoiceFooter from './features/invoice/InvoiceFooter';
import Button from './components/ui/Button';

const App = () => {
  const {
    invoice,
    subtotal,
    discountAmount,
    total,
    isPrinting,
    actions
  } = useInvoice();

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = `Recibo_${invoice.number}`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 500);
  };

  return (
    <MainLayout isPrinting={isPrinting}>
      <PrintControls
        isPrinting={isPrinting}
        onTogglePrint={actions.togglePrintMode}
        onPrint={handlePrint}
      />

      {/* Documento Principal */}
      <div className={`print-container max-w-4xl mx-auto bg-white transition-all duration-300 ${isPrinting ? 'p-12' : 'p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200'}`}>

        <InvoiceHeader
          invoice={invoice}
          onUpdate={actions.updateInvoiceField}
          isPrinting={isPrinting}
        />

        <ClientInfo
          invoice={invoice}
          onUpdate={actions.updateInvoiceField}
          isPrinting={isPrinting}
        />

        <ItemsTable
          items={invoice.items}
          onUpdateItem={actions.updateItem}
          onRemoveItem={actions.removeItem}
          onAddItem={actions.addItem}
          isPrinting={isPrinting}
        />

        <InvoiceSummary
          subtotal={subtotal}
          discountName={invoice.discountName}
          discountPercent={invoice.discountPercent}
          discountAmount={discountAmount}
          total={total}
          isDiscountEnabled={invoice.isDiscountEnabled}
          onUpdate={actions.updateInvoiceField}
          isPrinting={isPrinting}
        />

        <InvoiceFooter />

      </div>
    </MainLayout>
  );
};

export default App;
