import { useState } from 'react';

export const useInvoice = () => {
    const [isPrinting, setIsPrinting] = useState(false);

    // Datos iniciales
    const [invoice, setInvoice] = useState({
        number: "231",
        date: "2026-02-07",
        clientName: "",
        clientId: "",
        discountName: "DESCUENTO 3º ANIVERSARIO",
        discountPercent: 15,
        items: [
            { id: 1, desc: "LITEBEAM 5AC GEN 2 (FCP)", service: "BGA2228", code: "BGA2228", price: 120000 },
            { id: 2, desc: "LITEBEAM 5AC GEN 2 (LC)", service: "BGA2229", code: "BGA2229", price: 120000 },
            { id: 3, desc: "LITEAP 120 (LA)", service: "BGA2230", code: "BGA2230", price: 145000 }
        ]
    });

    // Cálculos
    const subtotal = invoice.items.reduce((acc, item) => acc + (Number(item.price) || 0), 0);
    const discountAmount = subtotal * (invoice.discountPercent / 100);
    const total = subtotal - discountAmount;

    // Acciones
    const updateItem = (id, field, value) => {
        setInvoice({
            ...invoice,
            items: invoice.items.map(item => item.id === id ? { ...item, [field]: value } : item)
        });
    };

    const addItem = () => {
        setInvoice({
            ...invoice,
            items: [...invoice.items, { id: Date.now(), desc: "", service: "", code: "", price: 0 }]
        });
    };

    const removeItem = (id) => {
        setInvoice({
            ...invoice,
            items: invoice.items.filter(item => item.id !== id)
        });
    };

    const updateInvoiceField = (field, value) => {
        setInvoice({ ...invoice, [field]: value });
    };

    const togglePrintMode = (mode) => setIsPrinting(mode);

    return {
        invoice,
        subtotal,
        discountAmount,
        total,
        isPrinting,
        actions: {
            updateItem,
            addItem,
            removeItem,
            updateInvoiceField,
            togglePrintMode
        }
    };
};
