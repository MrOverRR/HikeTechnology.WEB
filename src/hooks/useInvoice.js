import { useState, useEffect } from 'react';

export const useInvoice = () => {
    const [isPrinting, setIsPrinting] = useState(false);

    // Datos iniciales
    const initialInvoiceState = {
        number: "231",
        date: "2026-02-07",
        clientName: "",
        clientId: "",
        discountName: "DESCUENTO",
        discountPercent: 15,
        isDiscountEnabled: false,
        items: [
            { id: 1, desc: "LITEBEAM 5AC GEN 2 (FCP)", service: "BGA2228", price: 120000 },
        ]
    };

    const [invoice, setInvoice] = useState(() => {
        try {
            const saved = localStorage.getItem('invoiceData');
            return saved ? JSON.parse(saved) : initialInvoiceState;
        } catch (error) {
            console.error("Error loading from localStorage:", error);
            return initialInvoiceState;
        }
    });


    // Persistencia
    useEffect(() => {
        try {
            localStorage.setItem('invoiceData', JSON.stringify(invoice));
        } catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }, [invoice]);

    // Cálculos
    const subtotal = invoice.items.reduce((acc, item) => acc + (Number(item.price) || 0), 0);
    const discountAmount = invoice.isDiscountEnabled ? subtotal * (invoice.discountPercent / 100) : 0;
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
            items: [...invoice.items, { id: Date.now(), desc: "", service: "", price: 0 }]
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
